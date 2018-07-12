import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { connect } from "react-redux";
import { createSelector, OutputParametricSelector } from "reselect";

import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import CommandBarButtons from "content/sites/common/header/commandBarButtons/commandBarButtons";
import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";
import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";
import CommandBarHostComponent from "content/sites/common/header/commandBarHost/commandBarHostComponent";
import ICommandBarHostProps from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostProps";
import IHeaderProps from "content/sites/common/header/interfaces/IHeaderProps";
import IAppState from "duck/interfaces/IAppState";

type GetButtonListFromHeaderState = (state: IAppState) => ICommandButton[];
type IsSitesStandAlone = (state: IAppState) => boolean;
type GetProps = (state: IAppState, props: IHeaderProps) => IHeaderProps;
type ResultFunction =
    (buttonList: ICommandButton[], isStandAlone: boolean, props: IHeaderProps) => ICommandBarProps;

const getButtonList: GetButtonListFromHeaderState =
    (state: IAppState): ICommandButton[] => state.sitesState.headerState.commands;
const isSitesStandAlone: IsSitesStandAlone = (state: IAppState): boolean => state.sitesState.isStandAlone;
const getProps: GetProps = (state: IAppState, props: IHeaderProps): IHeaderProps => props;

const computeCommandbarItems:
    OutputParametricSelector<IAppState, IHeaderProps, ICommandBarProps, ResultFunction> = createSelector(
        [getButtonList, isSitesStandAlone, getProps],
        (buttonList: ICommandButton[], isStandAlone: boolean, props: IHeaderProps): ICommandBarProps => {

            if (!buttonList && buttonList.length === 0) {
                // if buttons not found in the state, return null so the commandbar renders nothing.
                return null;
            }

            const items: IContextualMenuItem[] = [];
            const farItems: IContextualMenuItem[] = [];
            const overflowItems: IContextualMenuItem[] = [];

            buttonList.map((data: ICommandButton) => {
                // Get constructed buttons from the CommandBarButtons using the raw command.
                const menuItem: IContextualMenuItem = CommandBarButtons.getButton(data);

                if (data.itemLocation === ItemLocation.Left) {
                    // Set click event to menu item(command button) aligned to left in the commandbar.
                    if (data.actionPayload) {
                        if (isStandAlone) {
                            // If sites in a standalone mode, render static information in the right pane
                            // instead of right panel on click of the menu item(command button).
                            // Because right panel is a part of chrome.
                            menuItem.onClick = (): void => props.toggleRightPane({
                                rightPaneId: "standAloneModeId",
                                rightPaneContent: null,
                                rightPaneHeaderText: `Sites is in standalone mode.
                                                    We are not able to open right panel because it is a part of chrome.`
                            });
                        } else {
                            // If sites not in a standalone mode, render the given action palyload
                            // in the right panel on click of the menu item(command button).
                            menuItem.onClick = (): void => props.openRightPanel(
                                data.actionPayload as IOpenRightPanelPayload
                            );
                        }
                    } else if (data.id === ButtonType.Link) {
                        // If button has a navigation link we can give an event here.
                        // For now it is set to null becasuse we do not have any link for button yet.
                        menuItem.onClick = null;
                    } else {
                        menuItem.onClick = null;
                    }

                    items.push(menuItem);
                } else if (data.itemLocation === ItemLocation.Far) {
                    // Set click event to menu item(command button) aligned to right side in the commandbar.
                    menuItem.onClick = data.actionPayload
                        ? (): void => props.toggleRightPane(data.actionPayload as IToggleSwitchRightPanePayload)
                        : null;
                    farItems.push(menuItem);
                } else {
                    overflowItems.push(menuItem);
                }
            });

            return {
                items,
                farItems,
                overflowItems
            };
        }
    );

type MapStateToProps = (state: IAppState, ownProps: IHeaderProps) => ICommandBarHostProps;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: IHeaderProps): ICommandBarHostProps => ({
        commandbarItems: computeCommandbarItems(state, ownProps)
    });

const CommandBarContainer: React.ComponentClass<IHeaderProps> = connect(
    mapStateToProps
)<ICommandBarHostProps>(CommandBarHostComponent);

export default CommandBarContainer;

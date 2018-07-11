import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createSelector, OutputParametricSelector } from "reselect";

import ButtonType from "../commandBarButtons/enums/buttonType";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import openRightPanel from "chrome/duck/actions/openRightPanel";
import CommandBarButtons from "../commandBarButtons/commandBarButtons";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import CommandBarHostComponent from "content/sites/common/header/commandBarHost/commandBarHostComponent";
import ICommandBarHostProps from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostProps";
import ICommandBarHostPropsFromDispatch from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromDispatch";
import ICommandBarHostPropsFromState from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromState";
import ISiteToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import sitesToggleRightPane from "content/sites/duck/actions/sitesToggleRightPane";
import IAppState from "duck/interfaces/IAppState";
import ICommandButton from "../commandBarButtons/ICommandButton";
import ItemLocation from "../commandBarButtons/enums/itemLocation";

type GetButtonListFromHeaderState = (state: IAppState) => ICommandButton[];
type IsSitesStandAlone = (state: IAppState) => boolean;
type ResultFunction = (buttonList: ICommandButton[], isStandAlone: boolean) => ICommandBarProps;

const getButtonList: GetButtonListFromHeaderState =
    (state: IAppState): ICommandButton[] => state.sitesState.headerState.commands;
const isSitesStandAlone: IsSitesStandAlone = (state: IAppState): boolean => state.sitesState.isStandAlone;

const computeCommandbarItems:
    OutputParametricSelector<IAppState, ICommandBarHostProps, ICommandBarProps, ResultFunction> = createSelector(
        [getButtonList, isSitesStandAlone],
        (buttonList: ICommandButton[], isStandAlone: boolean): ICommandBarProps => {
            if (!buttonList && buttonList.length === 0) {
                return null;
            }

            const items: IContextualMenuItem[] = [];
            const farItems: IContextualMenuItem[] = [];
            const overflowItems: IContextualMenuItem[] = [];

            buttonList.map((data: ICommandButton) => {
                const menuItem: IContextualMenuItem = CommandBarButtons.getButton(data);

                if (data.itemLocation === ItemLocation.Left) {
                    if (data.actionPayload) {
                        if (isStandAlone) {
                            /* menuItem.onClick = (): void => this.props.toggleRightPane({
                                rightPaneId: "standAloneModeId",
                                rightPaneContent: null,
                                rightPaneHeaderText: `Sites is in standalone mode.
                                                    We are not able to open right panel because it is a part of chrome.`
                            }); */
                        } else {
                            /*  menuItem.onClick = (): void => this.props.openRightPanel(
                                 data.actionPayload as IOpenRightPanelPayload
                             ); */
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
                    /*  menuItem.onClick = data.actionPayload
                         ? (): void => this.props.toggleRightPane(data.actionPayload as IToggleSwitchRightPanePayload)
                         : null; */
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

type MapStateToProps = (state: IAppState, ownProps: ICommandBarHostProps) => ICommandBarHostPropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: ICommandBarHostProps): ICommandBarHostPropsFromState => ({
        commandbarItems: computeCommandbarItems(state, ownProps)
    });

type Actions = IOpenRightPanelAction | ICloseRightPanelAction | ISiteToggleRightPaneAction;
type MapDispatchToProps = (dispatch: Dispatch<Actions>) => ICommandBarHostPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (dispatch: Dispatch<Actions>): ICommandBarHostPropsFromDispatch => ({
    openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
        dispatch(openRightPanel(actionPayload)),
    toggleRightPane: (actionPayload: IToggleSwitchRightPanePayload): ISiteToggleRightPaneAction =>
        dispatch(sitesToggleRightPane(actionPayload))
});
const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarHostProps>(CommandBarHostComponent);

export default CommandBarContainer;

import * as H from "history";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createSelector, OutputParametricSelector } from "reselect";

import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import CommandBarButtons from "content/sites/common/header/commandBarButtons/commandBarButtons";
import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";
import ICommandButton from "content/sites/common/header/commandBarButtons/interfaces/ICommandButton";
import CommandBarHostComponent from "content/sites/common/header/commandBarHost/commandBarHostComponent";
import ICommandBarHostPropsFromParent from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromParent";
import ICommandBarHostPropsFromState from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromState";
import IAppState from "duck/interfaces/IAppState";

type GetButtonListFromHeaderState = (state: IAppState) => ICommandButton[];
type IsSitesStandAlone = (state: IAppState) => boolean;
type RightPanelDispatchAction = (actionPayload: IOpenRightPanelPayload) => void;
type RightPaneDispatchAction = (actionPayload: IToggleSwitchRightPanePayload) => void;
type GetRightPanelDispatchAction =
    (state: IAppState, props: ICommandBarHostPropsFromParent) => RightPanelDispatchAction;
type GetRightPaneDispatchAction =
    (state: IAppState, props: ICommandBarHostPropsFromParent) => RightPaneDispatchAction;
type GetComponentRouterHistory = (state: IAppState, props: ICommandBarHostPropsFromParent) => H.History;
type ResultFunction = (
    buttonList: ICommandButton[],
    isStandAlone: boolean,
    rightPanelDispatchAction: RightPanelDispatchAction,
    rightPaneDispatchAction: RightPaneDispatchAction,
    history: H.History) => ICommandBarProps;

const getButtonList: GetButtonListFromHeaderState =
    (state: IAppState): ICommandButton[] => state.sitesState.headerState.commands;
const isSitesStandAlone: IsSitesStandAlone = (state: IAppState): boolean => state.sitesState.isStandAlone;
const getRightPanelDispatchAction: GetRightPanelDispatchAction =
    (state: IAppState, props: ICommandBarHostPropsFromParent): RightPanelDispatchAction => props.openRightPanel;
const getRightPaneDispatchAction: GetRightPaneDispatchAction =
    (state: IAppState, props: ICommandBarHostPropsFromParent): RightPaneDispatchAction => props.toggleRightPane;
const getComponentRouterHistory: GetComponentRouterHistory =
    (state: IAppState, props: ICommandBarHostPropsFromParent): H.History => props.history;

const computeCommandbarItems:
    OutputParametricSelector<IAppState, ICommandBarHostPropsFromParent, ICommandBarProps, ResultFunction> =
    createSelector(
        [
            getButtonList,
            isSitesStandAlone,
            getRightPanelDispatchAction,
            getRightPaneDispatchAction,
            getComponentRouterHistory
        ],
        (
            buttonList: ICommandButton[],
            isStandAlone: boolean,
            rightPanelDispatchAction: RightPanelDispatchAction,
            rightPaneDispatchAction: RightPaneDispatchAction,
            history: H.History
        ): ICommandBarProps => {

            if (!buttonList && buttonList.length === 0) {
                // if buttons not found in the state, return null so the commandbar renders nothing.
                return null;
            }

            // Array to contain the buttons to be render on the left, right, and within the overflow (ellipses)
            // sections respectively.
            const items: IContextualMenuItem[] = [];
            const farItems: IContextualMenuItem[] = [];
            const overflowItems: IContextualMenuItem[] = [];

            buttonList.map((button: ICommandButton) => {
                // Get constructed buttons from the CommandBarButtons using the raw command.
                const menuItem: IContextualMenuItem = CommandBarButtons.getButton(button);

                // Attaching onClick for the menu item depending on the button type.
                switch (button.type) {
                    case ButtonType.Add:
                        const payload: IOpenRightPanelPayload = button.actionPayload as IOpenRightPanelPayload;
                        if (!payload) {
                            // Don't set the onClick is the payload is not available.
                            menuItem.onClick = null;
                        }

                        if (!isStandAlone) {
                            menuItem.onClick = (): void => rightPanelDispatchAction(payload);
                        } else {
                            // If rendering in a standalone mode, we will render the content that was supposed to be
                            // in the panel into the pane since the panel is not available in this mode.
                            menuItem.onClick = (): void => rightPaneDispatchAction({
                                rightPaneId: payload.rightPanelId,
                                rightPaneContent: payload.rightPanelContent,
                                rightPaneHeaderText: `STANDALONEMODE - ${payload.rightPanelHeaderText}`,
                                rightPaneFooterRender: payload.rightPanelFooterRender,
                            });
                        }
                        break;

                    case ButtonType.Info:
                        menuItem.onClick = button.actionPayload
                            ? (): void => rightPaneDispatchAction(button.actionPayload as IToggleSwitchRightPanePayload)
                            : null;
                        break;

                    case ButtonType.Permissions:
                        // The permissions button will always navigate to the permissions page of the current location.
                        if (history && history.location) {
                            menuItem.onClick = (): void => history.push(`${history.location.pathname}/permissions`);
                        } else {
                            // We don't set the onClick if the history or history.location objects are not available.
                            menuItem.onClick = null;
                        }
                        break;

                    default: // No onClick is added in the default (unspecified) case.
                }

                // Adding the constructed menu item into the correct array based on the button's
                // item location enum value.
                switch (button.itemLocation) {
                    case ItemLocation.Left:
                        items.push(menuItem);
                        break;

                    case ItemLocation.Far:
                        farItems.push(menuItem);
                        break;

                    case ItemLocation.Overflow:
                    default: // Adding to overflow section in the default (unspecified) case for easy error detection.
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

type MapStateToProps = (state: IAppState, ownProps: ICommandBarHostPropsFromParent) => ICommandBarHostPropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: ICommandBarHostPropsFromParent): ICommandBarHostPropsFromState => ({
        commandbarItems: computeCommandbarItems(state, ownProps)
    });

const CommandBarHostContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<ICommandBarHostPropsFromState>(CommandBarHostComponent)
);

export default CommandBarHostContainer;

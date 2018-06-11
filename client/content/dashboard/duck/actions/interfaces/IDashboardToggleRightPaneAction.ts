import DASHBOARD_TOGGLE_RIGHT_PANE from "../../action-types/DASHBOARD_TOGGLE_RIGHT_PANE";

export default interface IDashboardToggleRightPaneAction {
    type: DASHBOARD_TOGGLE_RIGHT_PANE;
    rightPaneData: JSX.Element;
}

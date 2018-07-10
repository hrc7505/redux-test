import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE from "content/dashboard/duck/actionTypes/DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE";

export default interface IDashboardToggleSwitchRightPaneAction {
    type: DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE;
    payload: IToggleSwitchRightPanePayload;
}

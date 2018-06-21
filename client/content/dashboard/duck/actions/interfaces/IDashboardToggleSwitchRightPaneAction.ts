import DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE from "../../actionTypes/DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE";
import IToggleSwitchRightPanePayload from "../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IDashboardToggleSwitchRightPaneAction {
    type: DASHBOARD_TOGGLE_SWITCH_RIGHT_PANE;
    payload: IToggleSwitchRightPanePayload;
}

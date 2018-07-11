import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import ISitesToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import SITES_TOGGLE_SWITCH_RIGHT_PANE from "content/sites/duck/actionTypes/SITES_TOGGLE_SWITCH_RIGHT_PANE";

type SitesToggleRightPane = (payload: IToggleSwitchRightPanePayload) => ISitesToggleRightPaneAction;

const sitesToggleRightPane: SitesToggleRightPane =
    (payload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction => ({
        type: SITES_TOGGLE_SWITCH_RIGHT_PANE,
        payload
    });

export default sitesToggleRightPane;

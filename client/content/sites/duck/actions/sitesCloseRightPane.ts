import ISitesCloseRightPaneAction from "content/sites/duck/actions/interfaces/ISitesCloseRightPaneAction";
import SITES_CLOSE_RIGHT_PANE from "content/sites/duck/actionTypes/SITES_CLOSE_RIGHT_PANE";

export default function sitesCloseRightPane(): ISitesCloseRightPaneAction {
    return {
        type: SITES_CLOSE_RIGHT_PANE
    };
}

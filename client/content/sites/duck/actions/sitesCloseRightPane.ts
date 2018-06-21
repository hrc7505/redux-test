import ISitesCloseRightPaneAction from "./interfaces/ISitesCloseRightPaneAction";
import SITES_CLOSE_RIGHT_PANE from "../actionTypes/SITES_CLOSE_RIGHT_PANE";

export default function sitesCloseRightPane(): ISitesCloseRightPaneAction {
    return {
        type: SITES_CLOSE_RIGHT_PANE
    };
}

import ISiteCloseRightPaneAction from "./interfaces/ISiteCloseRightPaneAction";
import SITE_CLOSE_RIGHT_PANE from "../actionTypes/SITE_CLOSE_RIGHT_PANE";

export default function siteCloseRightPane(): ISiteCloseRightPaneAction {
    return {
        type: SITE_CLOSE_RIGHT_PANE
    };
}

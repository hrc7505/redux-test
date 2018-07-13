import ISitesCloseRightPaneAction from "content/sites/duck/actions/interfaces/ISitesCloseRightPaneAction";
import SITES_CLOSE_RIGHT_PANE from "content/sites/duck/actionTypes/SITES_CLOSE_RIGHT_PANE";

type SitesCloseRightPane = () => ISitesCloseRightPaneAction;

const sitesCloseRightPane: SitesCloseRightPane = (): ISitesCloseRightPaneAction => ({
    type: SITES_CLOSE_RIGHT_PANE
});

export default sitesCloseRightPane;

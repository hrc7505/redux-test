import ISitesToggleRightPaneByJobTileAction from "./interfaces/ISitesToggleRightPaneByJobTileAction";
import ISitesToggleRightPanePayload from "./interfaces/ISitesToggleRightPanePayload";
import SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE from "../action-types/SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE";

export default function sitesToggleRightPaneByJobTile(
    payload: ISitesToggleRightPanePayload): ISitesToggleRightPaneByJobTileAction {
    return {
        type: SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE,
        payload
    };
}

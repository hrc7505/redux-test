import ISitesToggleRightPanePayload from "./ISitesToggleRightPanePayload";
import SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE from "../../actionTypes/SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE";

export default interface ISitesToggleRightPaneByJobTileAction {
    type: SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE;
    payload: ISitesToggleRightPanePayload;
}

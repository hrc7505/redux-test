import CLOSE_LEFT_PANE from "../action-types/CLOSE_LEFT_PANE";
import ICloseLeftPaneAction from "./interfaces/ICloseLeftPaneAction";

export default function closeLeftPane(): ICloseLeftPaneAction {
    return {
        type: CLOSE_LEFT_PANE
    };
}

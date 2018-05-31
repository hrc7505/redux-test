import CLOSE_RIGHT_PANE from "../action-types/CLOSE_RIGHT_PANE";
import ICloseRightPaneAction from "./models/ICloseRightPaneAction";

export default function closeRightPane(): ICloseRightPaneAction {
    return {
        type: CLOSE_RIGHT_PANE
    };
}

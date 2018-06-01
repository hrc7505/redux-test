import IToggleLeftPaneAction from "./interfaces/IToggleLeftPaneAction";
import TOGGLE_LEFT_PANE from "../action-types/TOGGLE_LEFT_PANE";

const toggleLeftPane: () => IToggleLeftPaneAction = (): IToggleLeftPaneAction => ({
    type: TOGGLE_LEFT_PANE
});

export default toggleLeftPane;

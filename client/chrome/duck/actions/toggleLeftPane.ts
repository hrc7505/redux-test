import IToggleLeftPaneAction from "chrome/duck/actions/interfaces/IToggleLeftPaneAction";
import TOGGLE_LEFT_PANE from "chrome/duck/actionTypes/TOGGLE_LEFT_PANE";

const toggleLeftPane: () => IToggleLeftPaneAction = (): IToggleLeftPaneAction => ({
    type: TOGGLE_LEFT_PANE
});

export default toggleLeftPane;

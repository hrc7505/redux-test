import FOR_BODY1 from "./action-types/FOR_BODY1";
import FOR_BODY2 from "./action-types/FOR_BODY2";
import ICommandBarComponentProps from "../header/command-bar/models/ICommandBarComponentProps";
import ICommandBarForBodyAction from "./actions/models/ICommandBarForBodyAction";
import defaultState from "../../duck/DefaultState";

export default function commandBarReducer(
    state: ICommandBarComponentProps,
    action: ICommandBarForBodyAction): any {
    switch (action.type) {
        case FOR_BODY1:
            return {
                ...state,
                commandBarProps: defaultState.commandBarProps
            };

        case FOR_BODY2:
            return state;

        default:
            return {
                ...state,
                commandBarProps: defaultState.commandBarProps
            };
    }
}

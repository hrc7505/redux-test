import HEADER_SET_COMMANDS from "../actionTypes/HEADER_SET_COMMANDS";
import IHeaderCommandButtonsPayload from "./interfaces/IHeaderCommandButtonsPayload";
import IHeaderSetCommandsAction from "./interfaces/IHeaderSetCommandsAction";

export default function headerSetCommands(payload: IHeaderCommandButtonsPayload): IHeaderSetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

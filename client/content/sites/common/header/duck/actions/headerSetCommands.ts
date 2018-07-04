import HEADER_SET_COMMANDS from "../actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandsAction from "./interfaces/IHeaderSetCommandsAction";
import IHeaderSetCommandsPayload from "./interfaces/IHeaderSetCommandsPayload";

export default function headerSetCommands(payload: IHeaderSetCommandsPayload): IHeaderSetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

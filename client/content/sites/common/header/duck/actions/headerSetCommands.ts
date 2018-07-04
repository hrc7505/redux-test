import HEADER_SET_COMMANDS from "../actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandsPayload from "./interfaces/IHeaderSetCommandsPayload";
import IHeaderSetCommandsAction from "./interfaces/IHeaderSetCommandsAction";

export default function headerSetCommands(payload: IHeaderSetCommandsPayload): IHeaderSetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

import HEADER_SET_COMMANDS from "../actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandButtonsPayload from "./interfaces/IHeaderSetCommandButtonsPayload";
import IHeaderSetCommandsAction from "./interfaces/IHeaderSetCommandsAction";

export default function headerSetCommands(payload: IHeaderSetCommandButtonsPayload): IHeaderSetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

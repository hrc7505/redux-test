import HEADER_SET_COMMANDS from "../actionTypes/HEADER_SET_COMMANDS";
import ICommandButtonsPayload from "./interfaces/ICommandButtonsPayload";
import ISetCommandsAction from "./interfaces/ISetCommandsAction";

export default function setCommands(payload: ICommandButtonsPayload): ISetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

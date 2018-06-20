import ICommandsPayload from "./interfaces/ICommandsPayload";
import ISetCommandsAction from "./interfaces/ISetCommandsAction";
import SET_COMMANDS from "../actionTypes/SET_COMMANDS";

export default function setCommands(payload: ICommandsPayload): ISetCommandsAction {
    return {
        type: SET_COMMANDS,
        payload
    };
}

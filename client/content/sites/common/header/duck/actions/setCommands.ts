import ICommandButtonsPayload from "./interfaces/ICommandButtonsPayload";
import ISetCommandsAction from "./interfaces/ISetCommandsAction";
import SET_COMMANDS from "../actionTypes/SET_COMMANDS";

export default function setCommands(payload: ICommandButtonsPayload): ISetCommandsAction {
    return {
        type: SET_COMMANDS,
        payload
    };
}

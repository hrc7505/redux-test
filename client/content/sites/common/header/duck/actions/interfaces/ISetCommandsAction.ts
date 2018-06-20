import ICommandsPayload from "./ICommandsPayload";
import SET_COMMANDS from "../../actionTypes/SET_COMMANDS";

export default interface ISetCommandsAction {
    type: SET_COMMANDS;
    payload: ICommandsPayload;
}

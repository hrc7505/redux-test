import ICommandButtonsPayload from "./ICommandButtonsPayload";
import SET_COMMANDS from "../../actionTypes/SET_COMMANDS";

export default interface ISetCommandsAction {
    type: SET_COMMANDS;
    payload: ICommandButtonsPayload;
}

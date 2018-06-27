import HEADER_SET_COMMANDS from "../../actionTypes/HEADER_SET_COMMANDS";
import ICommandButtonsPayload from "./ICommandButtonsPayload";

export default interface ISetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: ICommandButtonsPayload;
}

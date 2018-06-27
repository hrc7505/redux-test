import HEADER_SET_COMMANDS from "../../actionTypes/HEADER_SET_COMMANDS";
import IHeaderCommandButtonsPayload from "./IHeaderCommandButtonsPayload";

export default interface IHeaderSetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: IHeaderCommandButtonsPayload;
}

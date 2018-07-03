import HEADER_SET_COMMANDS from "../../actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandButtonsPayload from "./IHeaderSetCommandButtonsPayload";

export default interface IHeaderSetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: IHeaderSetCommandButtonsPayload;
}

import HEADER_SET_COMMANDS from "../../actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandsPayload from "./IHeaderSetCommandsPayload";

export default interface IHeaderSetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: IHeaderSetCommandsPayload;
}

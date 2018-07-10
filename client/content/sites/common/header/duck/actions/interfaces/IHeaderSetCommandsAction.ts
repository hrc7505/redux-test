import IHeaderSetCommandsPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsPayload";
import HEADER_SET_COMMANDS from "content/sites/common/header/duck/actionTypes/HEADER_SET_COMMANDS";

export default interface IHeaderSetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: IHeaderSetCommandsPayload;
}

import HEADER_SET_COMMANDS from "content/sites/common/header/duck/actionTypes/HEADER_SET_COMMANDS";
import IHeaderSetCommandsPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsPayload";

export default interface IHeaderSetCommandsAction {
    type: HEADER_SET_COMMANDS;
    payload: IHeaderSetCommandsPayload;
}

import IHeaderSetCommandsAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetCommandsPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsPayload";
import HEADER_SET_COMMANDS from "content/sites/common/header/duck/actionTypes/HEADER_SET_COMMANDS";

type HeaderSetCommands = (payload: IHeaderSetCommandsPayload) => IHeaderSetCommandsAction;

const headerSetCommands: HeaderSetCommands = (payload: IHeaderSetCommandsPayload): IHeaderSetCommandsAction => ({
    type: HEADER_SET_COMMANDS,
    payload
});

export default headerSetCommands;

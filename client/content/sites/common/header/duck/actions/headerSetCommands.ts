import IHeaderSetCommandsAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetCommandsPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsPayload";
import HEADER_SET_COMMANDS from "content/sites/common/header/duck/actionTypes/HEADER_SET_COMMANDS";

export default function headerSetCommands(payload: IHeaderSetCommandsPayload): IHeaderSetCommandsAction {
    return {
        type: HEADER_SET_COMMANDS,
        payload
    };
}

import { Dispatch } from "redux";

import headerSetBreadcrumb from "../actions/headerSetBreadcrumb";
import headerSetCommands from "../actions/headerSetCommands";
import headerSetEntityTitle from "../actions/headerSetEntityTitle";
import IHeaderSetBreadcrumbAction from "../actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderPayload from "./interfaces/IHeaderPayload";

type Actions = IHeaderSetEntityTitleAction | IHeaderSetCommandsAction | IHeaderSetBreadcrumbAction;

export default function headerSetHeader(headerPayload: IHeaderPayload): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        if (headerPayload.breadcrumbPayload) {
            dispatch(headerSetBreadcrumb(headerPayload.breadcrumbPayload));
        }

        if (headerPayload.entityTitlePayload) {
            dispatch(headerSetEntityTitle(headerPayload.entityTitlePayload));
        }

        if (headerPayload.commandsPayload) {
            dispatch(headerSetCommands(headerPayload.commandsPayload));
        }
    };
}

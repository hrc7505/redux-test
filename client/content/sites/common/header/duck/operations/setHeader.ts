import { Dispatch } from "redux";

import headerSetBreadcrumb from "../actions/headerSetBreadcrumb";
import headerSetCommands from "../actions/headerSetCommands";
import headerSetEntityTitle from "../actions/headerSetEntityTitle";
import IHeaderSetBreadcrumbAction from "../actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetBreadcrumbPayload from "../actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandButtonsPayload from "../actions/interfaces/IHeaderSetCommandButtonsPayload";
import IHeaderSetCommandsAction from "../actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderSetEntityTitlePayload from "../actions/interfaces/IHeaderSetEntityTitlePayload";

type Actions = IHeaderSetEntityTitleAction | IHeaderSetCommandsAction | IHeaderSetBreadcrumbAction;

export default function setHeader(
    breadcrumbPayload: IHeaderSetBreadcrumbPayload,
    entityTitlePayload: IHeaderSetEntityTitlePayload,
    commandButtonsPayload: IHeaderSetCommandButtonsPayload
): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        if (breadcrumbPayload) {
            dispatch(headerSetBreadcrumb(breadcrumbPayload));
        }

        if (entityTitlePayload) {
            dispatch(headerSetEntityTitle(entityTitlePayload));
        }

        if (commandButtonsPayload) {
            dispatch(headerSetCommands(commandButtonsPayload));
        }
    };
}

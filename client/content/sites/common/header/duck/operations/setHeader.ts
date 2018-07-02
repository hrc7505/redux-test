import { Dispatch } from "redux";

import headerSetBreadcrumb from "../actions/headerSetBreadcrumb";
import headerSetCommands from "../actions/headerSetCommands";
import headerSetEntityTitle from "../actions/headerSetEntityTitle";
import IHeaderBreadcrumbPayload from "../actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../actions/interfaces/IHeaderEntityTitlePayload";
import IHeaderSetBreadcrumbAction from "../actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../actions/interfaces/IHeaderSetEntityTitleAction";

type Actions = IHeaderSetEntityTitleAction | IHeaderSetCommandsAction | IHeaderSetBreadcrumbAction;

export default function setHeader(
    breadcrumbPayload: IHeaderBreadcrumbPayload,
    entityTitlePayload: IHeaderEntityTitlePayload,
    commandButtonsPayload: IHeaderCommandButtonsPayload
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

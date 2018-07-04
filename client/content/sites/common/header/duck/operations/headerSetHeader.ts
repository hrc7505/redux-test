import { Dispatch } from "redux";

import getCommandsPayload from "./getCommandsPayload";
import headerSetBreadcrumb from "../actions/headerSetBreadcrumb";
import headerSetCommands from "../actions/headerSetCommands";
import headerSetEntityTitle from "../actions/headerSetEntityTitle";
import IHeaderPayload from "./interfaces/IHeaderPayload";
import IHeaderSetBreadcrumbAction from "../actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetCommandButtonsPayload from "../actions/interfaces/IHeaderSetCommandsPayload";
import IHeaderSetEntityTitleAction from "../actions/interfaces/IHeaderSetEntityTitleAction";

type Actions = IHeaderSetEntityTitleAction | IHeaderSetCommandsAction | IHeaderSetBreadcrumbAction;

export default function headerSetHeader(
    headerPayload: IHeaderPayload): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {
        const commandsPayload: IHeaderSetCommandButtonsPayload = getCommandsPayload(headerPayload.headerFor);

        if (headerPayload.locationPath) {
            dispatch(headerSetBreadcrumb({
                path: headerPayload.locationPath
            }));
        }

        if (headerPayload.entityTitle) {
            dispatch(headerSetEntityTitle({
                title: headerPayload.entityTitle
            }));
        }

        if (commandsPayload) {
            dispatch(headerSetCommands(commandsPayload));
        }
    };
}

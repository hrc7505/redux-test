import { Dispatch } from "redux";

import headerSetBreadcrumb from "../actions/headerSetBreadcrumb";
import headerSetCommands from "../actions/headerSetCommands";
import headerSetEntityTitle from "../actions/headerSetEntityTitle";
import IHeaderPayload from "./interfaces/IHeaderPayload";
import IHeaderSetBreadcrumbAction from "../actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../actions/interfaces/IHeaderSetEntityTitleAction";

type Actions = IHeaderSetEntityTitleAction | IHeaderSetCommandsAction | IHeaderSetBreadcrumbAction;

export default function headerSetHeader(
    headerPayload: IHeaderPayload): (dispatch: Dispatch<Actions>) => void {
    return (dispatch: Dispatch<Actions>): void => {

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

        if (headerPayload.commands) {
            dispatch(headerSetCommands({
                buttonList: headerPayload.commands
            }));
        }
    };
}

import { Dispatch } from "redux";

import headerSetBreadcrumb from "content/sites/common/header/duck/actions/headerSetBreadcrumb";
import headerSetCommands from "content/sites/common/header/duck/actions/headerSetCommands";
import headerSetEntityTitle from "content/sites/common/header/duck/actions/headerSetEntityTitle";
import IHeaderSetBreadcrumbAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import IHeaderPayload from "content/sites/common/header/duck/operations/interfaces/IHeaderPayload";

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

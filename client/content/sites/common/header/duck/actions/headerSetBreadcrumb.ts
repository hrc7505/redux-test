import IHeaderSetBreadcrumbAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetBreadcrumbPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";
import HEADER_SET_BREADCRUMB from "content/sites/common/header/duck/actionTypes/HEADER_SET_BREADCRUMB";

export default function headerSetBreadcrumb(payload: IHeaderSetBreadcrumbPayload): IHeaderSetBreadcrumbAction {
    return {
        type: HEADER_SET_BREADCRUMB,
        payload
    };
}

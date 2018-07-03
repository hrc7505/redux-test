import HEADER_SET_BREADCRUMB from "../actionTypes/HEADER_SET_BREADCRUMB";
import IHeaderSetBreadcrumbAction from "./interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetBreadcrumbPayload from "./interfaces/IHeaderSetBreadcrumbPayload";

export default function headerSetBreadcrumb(payload: IHeaderSetBreadcrumbPayload): IHeaderSetBreadcrumbAction {
    return {
        type: HEADER_SET_BREADCRUMB,
        payload
    };
}

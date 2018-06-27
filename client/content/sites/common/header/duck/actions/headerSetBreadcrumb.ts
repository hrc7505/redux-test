import HEADER_SET_BREADCRUMB from "../actionTypes/HEADER_SET_BREADCRUMB";
import IHeaderBreadcrumbPayload from "./interfaces/IHeaderBreadcrumbPayload";
import IHeaderSetBreadcrumbAction from "./interfaces/IHeaderSetBreadcrumbAction";

export default function headerSetBreadcrumb(payload: IHeaderBreadcrumbPayload): IHeaderSetBreadcrumbAction {
    return {
        type: HEADER_SET_BREADCRUMB,
        payload
    };
}

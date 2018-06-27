import HEADER_SET_BREADCRUMB from "../actionTypes/HEADER_SET_BREADCRUMB";
import IBreadcrumbPayload from "./interfaces/IBreadcrumbPayload";
import ISetBreadcrumbAction from "./interfaces/ISetBreadcrumbAction";

export default function setBreadcrumb(payload: IBreadcrumbPayload): ISetBreadcrumbAction {
    return {
        type: HEADER_SET_BREADCRUMB,
        payload
    };
}

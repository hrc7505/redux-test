import IBreadcrumbPayload from "./interfaces/IBreadcrumbPayload";
import ISetBreadcrumbAction from "./interfaces/ISetBreadcrumbAction";
import SET_BREADCRUMB from "../actionTypes/SET_BREADCRUMB";

export default function setBreadcrumb(payload: IBreadcrumbPayload): ISetBreadcrumbAction {
    return {
        type: SET_BREADCRUMB,
        payload
    };
}

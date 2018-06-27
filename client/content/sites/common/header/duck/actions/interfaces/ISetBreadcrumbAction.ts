import HEADER_SET_BREADCRUMB from "../../actionTypes/HEADER_SET_BREADCRUMB";
import IBreadcrumbPayload from "./IBreadcrumbPayload";

export default interface ISetBreadcrumbAction {
    type: HEADER_SET_BREADCRUMB;
    payload: IBreadcrumbPayload;
}

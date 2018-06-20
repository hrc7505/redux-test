import IBreadcrumbPayload from "./IBreadcrumbPayload";
import SET_BREADCRUMB from "../../actionTypes/SET_BREADCRUMB";

export default interface ISetBreadcrumbAction {
    type: SET_BREADCRUMB;
    payload: IBreadcrumbPayload;
}

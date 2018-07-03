import HEADER_SET_BREADCRUMB from "../../actionTypes/HEADER_SET_BREADCRUMB";
import IHeaderSetBreadcrumbPayload from "./IHeaderSetBreadcrumbPayload";

export default interface IHeaderSetBreadcrumbAction {
    type: HEADER_SET_BREADCRUMB;
    payload: IHeaderSetBreadcrumbPayload;
}

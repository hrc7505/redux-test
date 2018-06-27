import HEADER_SET_BREADCRUMB from "../../actionTypes/HEADER_SET_BREADCRUMB";
import IHeaderBreadcrumbPayload from "./IHeaderBreadcrumbPayload";

export default interface IHeaderSetBreadcrumbAction {
    type: HEADER_SET_BREADCRUMB;
    payload: IHeaderBreadcrumbPayload;
}

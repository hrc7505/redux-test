import HEADER_SET_BREADCRUMB from "content/sites/common/header/duck/actionTypes/HEADER_SET_BREADCRUMB";
import IHeaderSetBreadcrumbPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";

export default interface IHeaderSetBreadcrumbAction {
    type: HEADER_SET_BREADCRUMB;
    payload: IHeaderSetBreadcrumbPayload;
}

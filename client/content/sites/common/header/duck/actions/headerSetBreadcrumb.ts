import IHeaderSetBreadcrumbAction from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetBreadcrumbPayload from "content/sites/common/header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";
import HEADER_SET_BREADCRUMB from "content/sites/common/header/duck/actionTypes/HEADER_SET_BREADCRUMB";

type HeaderSetBreadcrumb = (payload: IHeaderSetBreadcrumbPayload) => IHeaderSetBreadcrumbAction;

const headerSetBreadcrumb: HeaderSetBreadcrumb =
    (payload: IHeaderSetBreadcrumbPayload): IHeaderSetBreadcrumbAction => ({
        type: HEADER_SET_BREADCRUMB,
        payload
    });

export default headerSetBreadcrumb;

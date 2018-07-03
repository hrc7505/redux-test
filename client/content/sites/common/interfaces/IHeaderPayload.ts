import IHeaderSetBreadcrumbPayload from "../header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandButtonsPayload from "../header/duck/actions/interfaces/IHeaderSetCommandButtonsPayload";
import IHeaderSetEntityTitlePayload from "../header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";

export default interface IHeaderPayload {
    breadcrumbPayload: IHeaderSetBreadcrumbPayload;
    entityTitlePayload: IHeaderSetEntityTitlePayload;
    commandButtonsPayload: IHeaderSetCommandButtonsPayload;
}

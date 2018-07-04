import IHeaderSetBreadcrumbPayload from "../../actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandsPayload from "../../actions/interfaces/IHeaderSetCommandsPayload";
import IHeaderSetEntityTitlePayload from "../../actions/interfaces/IHeaderSetEntityTitlePayload";

export default interface IHeaderPayload {
    breadcrumbPayload: IHeaderSetBreadcrumbPayload;
    entityTitlePayload: IHeaderSetEntityTitlePayload;
    commandsPayload: IHeaderSetCommandsPayload;
}

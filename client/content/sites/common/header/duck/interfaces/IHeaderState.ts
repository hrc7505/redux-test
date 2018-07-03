import IHeaderSetBreadcrumbPayload from "../actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandButtonsPayload from "../actions/interfaces/IHeaderSetCommandButtonsPayload";

export default interface IHeaderState {
    breadcrumb?: IHeaderSetBreadcrumbPayload;
    title: string;
    commands?: IHeaderSetCommandButtonsPayload;
}

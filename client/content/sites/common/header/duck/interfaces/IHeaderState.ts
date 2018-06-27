import IHeaderBreadcrumbPayload from "../actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../actions/interfaces/IHeaderCommandButtonsPayload";

export default interface IHeaderState {
    breadcrumb?: IHeaderBreadcrumbPayload;
    title: string;
    commands?: IHeaderCommandButtonsPayload;
}

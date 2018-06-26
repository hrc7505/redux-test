import IBreadcrumbPayload from "../actions/interfaces/IBreadcrumbPayload";
import ICommandButtonsPayload from "../actions/interfaces/ICommandButtonsPayload";

export default interface IHeaderState {
    breadcrumb?: IBreadcrumbPayload;
    title: string;
    commands?: ICommandButtonsPayload;
}

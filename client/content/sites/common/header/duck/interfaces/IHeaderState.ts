import IBreadcrumbPayload from "../actions/interfaces/IBreadcrumbPayload";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface IHeaderState {
    breadcrumb?: IBreadcrumbPayload;
    title: string;
    commands?: ICommandBarProps;
}

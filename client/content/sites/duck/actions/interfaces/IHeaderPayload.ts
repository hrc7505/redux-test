import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface IHeaderPayload {
    breadcrumb?: IBreadcrumbProps;
    title: string;
    commands?: ICommandBarProps;
}

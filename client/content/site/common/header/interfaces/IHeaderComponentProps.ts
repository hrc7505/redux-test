import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface IHeaderComponentProps {
    breadcrumb?: IBreadcrumbProps;
    title: string;
    commands?: ICommandBarProps;
}

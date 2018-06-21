import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { RouteComponentProps } from "react-router";

export default interface IBreadcrumbHostProps
    extends IBreadcrumbProps, RouteComponentProps<string> { }

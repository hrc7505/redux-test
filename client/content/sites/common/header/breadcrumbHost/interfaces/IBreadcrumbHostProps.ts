import IBreadcrumbPropsFromState from "./IBreadcrumbPropsFromState";
import { RouteComponentProps } from "react-router";

export default interface IBreadcrumbHostProps
    extends IBreadcrumbPropsFromState, RouteComponentProps<string> { }

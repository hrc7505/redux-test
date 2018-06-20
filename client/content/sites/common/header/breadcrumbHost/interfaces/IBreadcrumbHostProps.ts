import { RouteComponentProps } from "react-router";

import IBreadcrumbHostPropsFromState from "./IBreadcrumbHostPropsFromState";

export default interface IBreadcrumbHostProps
    extends IBreadcrumbHostPropsFromState, RouteComponentProps<string> { }

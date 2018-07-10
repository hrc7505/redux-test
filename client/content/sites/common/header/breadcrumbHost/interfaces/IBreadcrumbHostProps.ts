import { RouteComponentProps } from "react-router";

import IBreadcrumbPropsFromState from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbPropsFromState";

export default interface IBreadcrumbHostProps
    extends IBreadcrumbPropsFromState, RouteComponentProps<string> { }

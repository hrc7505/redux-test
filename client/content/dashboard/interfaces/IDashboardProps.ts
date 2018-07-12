import { RouteComponentProps } from "react-router";

import IDashboardPropsFromDispatch from "content/dashboard/interfaces/IDashboardPropsFromDispatch";
import IDashboardPropsFromState from "content/dashboard/interfaces/IDashboardPropsFromState";

export default interface IDashboardProps
    extends IDashboardPropsFromDispatch, IDashboardPropsFromState, RouteComponentProps<string> { }

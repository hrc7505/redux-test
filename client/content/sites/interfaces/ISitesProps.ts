import { RouteComponentProps } from "react-router";

import ISitesPropsFromState from "content/sites/interfaces/ISitesPropsFromState";

export default interface ISitesProps
    extends ISitesPropsFromState, RouteComponentProps<string> { }

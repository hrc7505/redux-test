import { RouteComponentProps } from "react-router";

import ISiteDetailsPropsFromDispatch from "content/sites/siteDetails/interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "content/sites/siteDetails/interfaces/ISiteDetailsPropsFromState";

export default interface ISiteDetailsProps
    extends ISiteDetailsPropsFromState,
    ISiteDetailsPropsFromDispatch,
    RouteComponentProps<string> { }

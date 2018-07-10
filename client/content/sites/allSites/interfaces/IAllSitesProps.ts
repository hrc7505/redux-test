import { RouteComponentProps } from "react-router";

import IAllSitesPropsFromDispatch from "content/sites/allSites/interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "content/sites/allSites/interfaces/IAllSitesPropsFromState";

export default interface IAllSitesProps
    extends IAllSitesPropsFromState, IAllSitesPropsFromDispatch, RouteComponentProps<string> {
}

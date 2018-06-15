import IAllSitesPropsFromDispatch from "../../allSites/interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./IAllSitesPropsFromState";

export default interface IAllSitesProps
    extends IAllSitesPropsFromState, IAllSitesPropsFromDispatch {
}

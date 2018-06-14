import ISitesPropsFromDispatch from "./ISitesPropsFromDispatch";
import ISitesPropsFromState from "./ISitesPropsFromState";

export default interface ISitesComponentProps
    extends ISitesPropsFromState, ISitesPropsFromDispatch {
}

import ISitePropsFromDispatch from "./ISitePropsFromDispatch";
import ISitePropsFromState from "./ISitePropsFromState";

export default interface ISiteComponentProps
    extends ISitePropsFromState, ISitePropsFromDispatch {
}

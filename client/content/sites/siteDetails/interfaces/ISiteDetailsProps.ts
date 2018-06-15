import IIndividualSitePropsFromDispatch from "./ISiteDetailsPropsFromDispatch";
import IIndividualSitePropsFromState from "./ISiteDetailsPropsFromState";

export default interface IIndividualSiteProps
    extends IIndividualSitePropsFromState, IIndividualSitePropsFromDispatch { }

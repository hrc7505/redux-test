import IIndividualSitePropsFromDispatch from "./ISiteDetailsPropsFromDispatch";
import IIndividualSitePropsFromState from "./ISiteDetailsPropsFromState";
import { RouteComponentProps } from "react-router";

export default interface IIndividualSiteProps
    extends IIndividualSitePropsFromState,
    IIndividualSitePropsFromDispatch,
    RouteComponentProps<{ individualSite: string }> { }

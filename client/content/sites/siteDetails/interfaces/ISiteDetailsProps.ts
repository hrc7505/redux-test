import ISiteDetailsPropsFromDispatch from "./ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./ISiteDetailsPropsFromState";
import { RouteComponentProps } from "react-router";

export default interface ISiteDetailsProps
    extends ISiteDetailsPropsFromState,
    ISiteDetailsPropsFromDispatch,
    RouteComponentProps<{ individualSite: string }> { }

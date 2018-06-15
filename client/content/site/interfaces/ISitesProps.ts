import ISitesPropsFromState from "./ISitesPropsFromState";
import { RouteComponentProps } from "react-router";

export default interface ISitesProps
    extends ISitesPropsFromState, RouteComponentProps<string> { }

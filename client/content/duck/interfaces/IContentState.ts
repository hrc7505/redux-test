import IRightPaneComponentProps from "../../right-pane/interfaces/IRightPaneComponentProps";
import ISiteState from "../../body/site/interfaces/ISiteState";

export default interface IContentState {
    siteReducer: ISiteState;
    rightPaneReducer: IRightPaneComponentProps;
}

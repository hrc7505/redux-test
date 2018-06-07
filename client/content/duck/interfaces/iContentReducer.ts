import IRightPaneComponentProps from "../../right-pane/interfaces/IRightPaneComponentProps";
import ISiteComponentProps from "../../body/site/interfaces/iSiteComponentProps";

export default interface IContentReducer {
    siteReducer: ISiteComponentProps;
    rightPaneReducer: IRightPaneComponentProps;
}

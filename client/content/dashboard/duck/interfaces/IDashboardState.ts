import IContentState from "content/dashboard/duck/interfaces/IContentState";
import IRightPaneState from "content/common/rightPane/duck/interfaces/IRightPaneState";

export default interface IDashboardState {
    contentState: IContentState;
    rightPaneState: IRightPaneState;
}

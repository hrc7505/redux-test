import IRightPaneState from "content/common/rightPane/duck/interfaces/IRightPaneState";
import IContentState from "content/dashboard/duck/interfaces/IContentState";

export default interface IDashboardState {
    contentState: IContentState;
    rightPaneState: IRightPaneState;
}

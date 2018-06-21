import IContentState from "./IContentState";
import IRightPaneState from "../../../common/rightPane/duck/interfaces/IRightPaneState";

export default interface IDashboardState {
    contentState: IContentState;
    rightPaneState: IRightPaneState;
}

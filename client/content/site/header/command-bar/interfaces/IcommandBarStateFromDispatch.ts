import IRightPanelData from "../../../../../chrome/right-panel/interfaces/IRightPanelData";

export default interface ICommandBarStateFromDispatch {
    openRightPanel?: (rightPanelData: IRightPanelData) => void;
    toggleRightPane?: (rightPaneData: JSX.Element) => void;
}

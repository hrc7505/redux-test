import IToggleLeftPane from "./IToggleLeftPane";

export default interface ITopBarComponentProps extends IToggleLeftPane {
    toggleLeftPane: () => void;
    closeRightPane: () => void;
    isRightPanelVisible: boolean;
}

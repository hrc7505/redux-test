import IToggleLeftPane from "./IToggleLeftPane";

export default interface ITopBarComponentProps extends IToggleLeftPane {
    toggleLeftPane: () => void;
    isRightPanelVisible: boolean;
}

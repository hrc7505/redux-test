import ICloseRightPanelAction from "../../../duck/actions/interfaces/ICloseRightPanelAction";

export default interface IRightPanelProps {
    isRightPanelVisible: boolean;
    childComponent: JSX.Element;
    closeRightPanel?: () => ICloseRightPanelAction;
}

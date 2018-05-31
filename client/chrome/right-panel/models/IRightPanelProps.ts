import ICloseRightPanelAction from "../../../duck/actions/models/ICloseRightPanelAction";

export default interface IRightPanelProps {
    isRightPanelVisible: boolean;
    childComponent: JSX.Element;
    closeRightPanel?: () => ICloseRightPanelAction;
}

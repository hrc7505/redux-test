import ICloseRightPanelAction from "../../duck/actions/interfaces/ICloseRightPanelAction";

export default interface IRightPanelPropsFromDispatch {
    closeRightPanel: () => ICloseRightPanelAction;
}

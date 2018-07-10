import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";

export default interface IRightPanelPropsFromDispatch {
    closeRightPanel: () => ICloseRightPanelAction;
}

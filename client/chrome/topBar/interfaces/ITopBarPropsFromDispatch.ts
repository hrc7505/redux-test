import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";

export default interface ITopBarPropsFromDispatch {
    toggleLeftPane: () => void;
    openRightPanel: (actionPaylod: IOpenRightPanelPayload) => IOpenRightPanelAction;
}

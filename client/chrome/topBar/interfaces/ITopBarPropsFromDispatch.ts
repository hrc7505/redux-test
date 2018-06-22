import IOpenRightPanelAction from "../../duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "../../duck/actions/interfaces/IOpenRightPanelPayload";

export default interface ITopBarPropsFromDispatch {
    toggleLeftPane: () => void;
    openRightPanel: (actionPaylod: IOpenRightPanelPayload) => IOpenRightPanelAction;
}

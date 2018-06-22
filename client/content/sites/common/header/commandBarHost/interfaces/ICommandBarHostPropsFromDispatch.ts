import IOpenRightPanelPayload from "../../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "../../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ICommandBarHostPropsFromDispatch {
    openRightPanel?: (actionPayload: IOpenRightPanelPayload) => void;
    siteButtonOnClick?: (actionPayload: IToggleSwitchRightPanePayload) => void;
}

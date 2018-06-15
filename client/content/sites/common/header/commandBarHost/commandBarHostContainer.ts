import { connect, Dispatch } from "react-redux";

import CommandBarHostComponent from "./commandBarHostComponent";
import ICloseRightPanelAction from "../../../../../chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarHostProps from "./interfaces/ICommandBarHostProps";
import ICommandBarHostPropsFromDispatch from "./interfaces/ICommandBarHostPropsFromDispatch";
import IOpenRightPanelAction from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelAction";
import ISiteToggleRightPaneAction from "../../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "../../../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../../../chrome/rightPanel/interfaces/IToggleRightPanelPayload";
import openRightPanel from "../../../../../chrome/duck/actions/openRightPanel";
import sitesToggleRightPane from "../../../../sites/duck/actions/sitesToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | ISiteToggleRightPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ICommandBarHostPropsFromDispatch {
    return {
        openRightPanel: (actionPayload: IToggleRightPanelPayload): IOpenRightPanelAction =>
            dispatch(openRightPanel(actionPayload)),
        siteButtonOnClick: (actionPayload: ISitesToggleRightPanePayload): ISiteToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload))
    };
}
const CommandBarContainer: React.ComponentClass<ICommandBarHostProps> = connect(
    null,
    mapDispatchToProps
)<ICommandBarHostProps>(CommandBarHostComponent);

export default CommandBarContainer;

import { connect, Dispatch } from "react-redux";

import CommandbarComponent from "./CommandbarComponent";
import ICloseRightPanelAction from "../../../../../chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarComponentProps from "./interfaces/iCommandBarComponentProps";
import ICommandBarStateFromDispatch from "./interfaces/ICommandBarStateFromDispatch";
import IOpenRightPanelAction from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelAction";
import ISiteToggleRightPaneAction from "../../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "../../../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";
import openRightPanel from "../../../../../chrome/duck/actions/openRightPanel";
import sitesToggleRightPane from "../../../duck/actions/sitesToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | ISiteToggleRightPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ICommandBarStateFromDispatch {
    return {
        openRightPanel: (actionPayload: IToggleRightPanelPayload): IOpenRightPanelAction =>
            dispatch(openRightPanel(actionPayload)),
        siteButtonOnClick: (actionPayload: ISitesToggleRightPanePayload): ISiteToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload))
    };
}
const CommandBarContainer: React.ComponentClass<ICommandBarComponentProps> = connect(
    null,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

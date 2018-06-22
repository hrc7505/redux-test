import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { connect, Dispatch } from "react-redux";

import CommandBarHostComponent from "./commandBarHostComponent";
import IAppState from "../../../../../duck/interfaces/IAppState";
import ICloseRightPanelAction from "../../../../../chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarHostProps from "./interfaces/ICommandBarHostProps";
import ICommandBarHostPropsFromDispatch from "./interfaces/ICommandBarHostPropsFromDispatch";
import IOpenRightPanelAction from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ISiteToggleRightPaneAction from "../../../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import openRightPanel from "../../../../../chrome/duck/actions/openRightPanel";
import sitesToggleRightPane from "../../../../sites/duck/actions/sitesToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | ISiteToggleRightPaneAction;

function mapStateToProps(state: IAppState): ICommandBarProps {
    return {
        ...state.sitesState.headerState.commands
    };
}

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ICommandBarHostPropsFromDispatch {
    return {
        openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
            dispatch(openRightPanel(actionPayload)),
        siteButtonOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISiteToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload))
    };
}
const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarHostProps>(CommandBarHostComponent);

export default CommandBarContainer;

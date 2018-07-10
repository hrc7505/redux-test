import { connect } from "react-redux";
import { Dispatch } from "redux";

import CommandBarHostComponent from "content/sites/common/header/commandBarHost/commandBarHostComponent";
import IAppState from "duck/interfaces/IAppState";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarHostProps from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostProps";
import ICommandBarHostPropsFromDispatch from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromDispatch";
import ICommandBarHostPropsFromState from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromState";
import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ISiteToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import openRightPanel from "chrome/duck/actions/openRightPanel";
import sitesToggleRightPane from "content/sites/duck/actions/sitesToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | ISiteToggleRightPaneAction;

function mapStateToProps(state: IAppState): ICommandBarHostPropsFromState {
    return {
        buttonList: state.sitesState.headerState.commands,
        isStandAlone: state.sitesState.isStandAlone
    };
}

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ICommandBarHostPropsFromDispatch {
    return {
        openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
            dispatch(openRightPanel(actionPayload)),
        toggleRightPane: (actionPayload: IToggleSwitchRightPanePayload): ISiteToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload))
    };
}
const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarHostProps>(CommandBarHostComponent);

export default CommandBarContainer;

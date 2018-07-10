import { connect } from "react-redux";
import { Dispatch } from "redux";

import IAppState from "duck/interfaces/IAppState";
import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleLeftPaneAction from "chrome/duck/actions/interfaces/IToggleLeftPaneAction";
import ITopBarProps from "chrome/topBar/interfaces/ITopBarProps";
import ITopBarPropsFromDispatch from "chrome/topBar/interfaces/ITopBarPropsFromDispatch";
import ITopBarPropsFromState from "chrome/topBar/interfaces/ITopBarPropsFromState";
import openRightPanel from "chrome/duck/actions/openRightPanel";
import toggleLeftPane from "chrome/duck/actions/toggleLeftPane";
import TopBarComponent from "chrome/topBar/TopBarComponent";

function mapStateToProps(state: IAppState): ITopBarPropsFromState {
    return {
        isLeftPaneVisible: state.chromeState.isLeftPaneVisible
    };
}

type Actions = IToggleLeftPaneAction | IOpenRightPanelAction;

function mapDispatchToProps(dispatch: Dispatch<Actions>): ITopBarPropsFromDispatch {
    return {
        toggleLeftPane: (): IToggleLeftPaneAction => dispatch(toggleLeftPane()),
        openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
            dispatch(openRightPanel(actionPayload))
    };
}

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ITopBarProps>(TopBarComponent);

export default TopBarContainer;

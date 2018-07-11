import { connect } from "react-redux";
import { Dispatch } from "redux";

import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleLeftPaneAction from "chrome/duck/actions/interfaces/IToggleLeftPaneAction";
import openRightPanel from "chrome/duck/actions/openRightPanel";
import toggleLeftPane from "chrome/duck/actions/toggleLeftPane";
import ITopBarProps from "chrome/topBar/interfaces/ITopBarProps";
import ITopBarPropsFromDispatch from "chrome/topBar/interfaces/ITopBarPropsFromDispatch";
import ITopBarPropsFromState from "chrome/topBar/interfaces/ITopBarPropsFromState";
import TopBarComponent from "chrome/topBar/TopBarComponent";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState) => ITopBarPropsFromState;

const mapStateToProps: MapStateToProps = (state: IAppState): ITopBarPropsFromState => ({
    isLeftPaneVisible: state.chromeState.isLeftPaneVisible
});

type Actions = IToggleLeftPaneAction | IOpenRightPanelAction;
type MapDispatchToProps = (dispatch: Dispatch<Actions>) => ITopBarPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (dispatch: Dispatch<Actions>): ITopBarPropsFromDispatch => ({
    toggleLeftPane: (): IToggleLeftPaneAction => dispatch(toggleLeftPane()),
    openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
        dispatch(openRightPanel(actionPayload))
});

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ITopBarProps>(TopBarComponent);

export default TopBarContainer;

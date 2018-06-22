import { connect, Dispatch } from "react-redux";

import IAppState from "../../duck/interfaces/IAppState";
import IOpenRightPanelAction from "../duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "../duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleLeftPaneAction from "../duck/actions/interfaces/IToggleLeftPaneAction";
import ITopBarProps from "./interfaces/ITopBarProps";
import ITopBarPropsFromDispatch from "./interfaces/ITopBarPropsFromDispatch";
import ITopBarPropsFromState from "./interfaces/ITopBarPropsFromState";
import openRightPanel from "../duck/actions/openRightPanel";
import toggleLeftPane from "../duck/actions/toggleLeftPane";
import TopBarComponent from "./TopBarComponent";

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

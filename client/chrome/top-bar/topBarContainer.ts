import { connect, Dispatch } from "react-redux";

import IAppState from "../../duck/interfaces/IAppState";
import IToggleLeftPaneAction from "../duck/actions/interfaces/IToggleLeftPaneAction";
import ITopBarProps from "./interfaces/ITopBarProps";
import ITopBarPropsFromDispatch from "./interfaces/ITopBarPropsFromDispatch";
import ITopBarPropsFromState from "./interfaces/ITopBarPropsFromState";
import toggleLeftPane from "../duck/actions/toggleLeftPane";
import TopBarComponent from "./TopBarComponent";

function mapStateToProps(state: IAppState): ITopBarPropsFromState {
    return {
        isLeftPaneVisible: state.chromeState.isLeftPaneVisible
    };
}

type DispatchTypes = IToggleLeftPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DispatchTypes>): ITopBarPropsFromDispatch {
    return {
        toggleLeftPane: (): IToggleLeftPaneAction => dispatch(toggleLeftPane())
    };
}

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ITopBarProps>(TopBarComponent);

export default TopBarContainer;

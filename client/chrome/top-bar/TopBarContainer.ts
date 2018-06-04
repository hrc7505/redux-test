import { connect, Dispatch } from "react-redux";

import IAppReducer from "../../duck/interfaces/IAppReducer";
import IToggleLeftPane from "./interfaces/IToggleLeftPane";
import IToggleLeftPaneAction from "../../duck/actions/interfaces/IToggleLeftPaneAction";
import ITopBarComponentProps from "./interfaces/ITopBarComponentProps";
import toggleLeftPane from "../../duck/actions/toggleLeftPane";
import TopBarComponent from "./TopBarComponent";

function mapStateToProps(state: IAppReducer, ownProps: ITopBarComponentProps): ITopBarComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible,
        isRightPanelVisible: state.rightPaneReducer.isRightPaneVisible
    };
}

type DispatchTypes = IToggleLeftPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DispatchTypes>): ReturnType<typeof mapDispatchToProps> {
    return {
        toggleLeftPane: (): IToggleLeftPaneAction => dispatch(toggleLeftPane())
    };
}

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IToggleLeftPane>(TopBarComponent);

export default TopBarContainer;

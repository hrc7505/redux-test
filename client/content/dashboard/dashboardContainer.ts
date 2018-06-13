import { connect, Dispatch } from "react-redux";

import DashboardComponent from "./dashboardComponent";
import dashboardToggleRightPane from "./duck/actions/dashboardToggleRightPane";
import IAppState from "../../duck/interfaces/IAppState";
import IDashboardProps from "./interfaces/IDashboardProps";
import IDashboardPropsFromDispatch from "./interfaces/IDashboardPropsFromDispatch";
import IDashboardPropsFromState from "./interfaces/IDashboardPropsFromState";
import IDashboardToggleRightPaneAction from "./duck/actions/interfaces/IDashboardToggleRightPaneAction";
import IDashboardToggleRightPanePayload from "./duck/actions/interfaces/IDashboardToggleRightPanePayload";

function mapStateToProps(state: IAppState): IDashboardPropsFromState {
    return {
        rightPaneProps: {
            isRightPaneVisible: state.dashboardState.isRightPaneVisible,
            rightPaneHeaderText: state.dashboardState.rightPaneHeaderText,
            rightPaneContent: state.dashboardState.rightPaneContent,
            rightPaneFooterRender: state.dashboardState.rightPaneFooterRender,
        }
    };
}

function mapDispatchToProps(dispatch: Dispatch<IDashboardToggleRightPaneAction>): IDashboardPropsFromDispatch {
    return {
        jobTileOnClick: (actionPayload: IDashboardToggleRightPanePayload): IDashboardToggleRightPaneAction =>
            dispatch(dashboardToggleRightPane(actionPayload))
    };
}

const DashboardContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IDashboardProps>(DashboardComponent);

export default DashboardContainer;

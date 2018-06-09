import { connect, Dispatch } from "react-redux";

import DashboardComponent from "./dashboardComponent";
import dashboardToggleRightPane from "./duck/actions/dashboardToggleRightPane";
import IAppState from "../../duck/interfaces/IAppState";
import IDashboardProps from "./interfaces/IDashboardProps";
import IDashboardPropsFromDispatch from "./interfaces/IDashboardPropsFromDispatch";
import IDashboardPropsFromState from "./interfaces/IDashboardPropsFromState";
import IDashboardToggleRightPaneAction from "./duck/actions/interfaces/IDashboardToggleRightPaneAction";


function mapStateToProps(state: IAppState): IDashboardPropsFromState {
    return {
        isRightPaneVisible: state.dashboardState.isRightPaneVisible,
        rightPaneData: state.dashboardState.rightPaneData
    };
}

function mapDispatchToProps(dispatch: Dispatch<IDashboardToggleRightPaneAction>): IDashboardPropsFromDispatch {
    return {
        jobTileOnClick: (rightPaneData: JSX.Element) => dispatch(dashboardToggleRightPane(rightPaneData))
    };
}

const DashboardContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IDashboardProps>(DashboardComponent);

export default DashboardContainer;
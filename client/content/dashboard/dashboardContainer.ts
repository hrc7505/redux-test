import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";

import DashboardComponent from "./dashboardComponent";
import dashboardGetData from "./duck/operations/dashboardGetData";
import dashboardToggleRightPane from "./duck/actions/dashboardToggleSwitchRightPane";
import IAppState from "../../duck/interfaces/IAppState";
import IDashboardCloseRightPaneAction from "./duck/actions/interfaces/IDashboardCloseRightPaneAction";
import IDashboardProps from "./interfaces/IDashboardProps";
import IDashboardPropsFromDispatch from "./interfaces/IDashboardPropsFromDispatch";
import IDashboardPropsFromState from "./interfaces/IDashboardPropsFromState";
import IDashboardToggleSwitchRightPaneAction from "./duck/actions/interfaces/IDashboardToggleSwitchRightPaneAction";
import IToggleSwitchRightPanePayload from "../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

function mapStateToProps(state: IAppState, ownProps: IDashboardPropsFromState): IDashboardPropsFromState {
    return {
        ...ownProps,
        rightPaneProps: {
            isRightPaneVisible: state.dashboardState.rightPaneState.isRightPaneVisible,
            rightPaneHeaderText: state.dashboardState.rightPaneState.rightPaneHeaderText,
            rightPaneContent: state.dashboardState.rightPaneState.rightPaneContent,
            rightPaneFooterRender: state.dashboardState.rightPaneState.rightPaneFooterRender,
        },
        rightPaneId: state.dashboardState.rightPaneState.rightPaneId,
        detailsListItems: state.dashboardState.contentState.sites,
        jobs: state.dashboardState.contentState.activeJobs,
        isLoading: state.dashboardState.contentState.isLoading,
    };
}

type Actions = IDashboardCloseRightPaneAction | IDashboardToggleSwitchRightPaneAction;
type MapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, Actions>) => IDashboardPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, void /* Extra Arguments*/, Actions>
): IDashboardPropsFromDispatch => (
        {
            jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): IDashboardToggleSwitchRightPaneAction =>
                dispatch(dashboardToggleRightPane(actionPayload)),
            getData: (useShim: boolean): void => { dispatch(dashboardGetData(useShim)); },
        }
    );

const DashboardContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )<IDashboardProps>(DashboardComponent)
);

export default DashboardContainer;

import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import DashboardComponent from "content/dashboard/dashboardComponent";
import dashboardGetData from "content/dashboard/duck/operations/dashboardGetData";
import IDashboardProps from "content/dashboard/interfaces/IDashboardProps";
import IDashboardPropsFromDispatch from "content/dashboard/interfaces/IDashboardPropsFromDispatch";
import IDashboardPropsFromState from "content/dashboard/interfaces/IDashboardPropsFromState";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>) => IDashboardPropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: RouteComponentProps<string>): IDashboardPropsFromState => ({
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
    });

type MapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, Action>) => IDashboardPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, void /* Extra Arguments*/, Action>
): IDashboardPropsFromDispatch => (
        {
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

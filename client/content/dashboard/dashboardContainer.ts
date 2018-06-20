import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import DashboardComponent from "./dashboardComponent";
import dashboardGetData from "./duck/operations/dashboardGetData";
import dashboardToggleRightPane from "./duck/actions/dashboardToggleRightPane";
import IAppState from "../../duck/interfaces/IAppState";
import IDashboardCloseRightPaneAction from "./duck/actions/interfaces/IDashboardCloseRightPaneAction";
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
        },
        detailsListItems: state.dashboardState.sites,
        jobs: state.dashboardState.activeJobs,
        isLoading: state.dashboardState.isLoading,
    };
}

type Actions = IDashboardCloseRightPaneAction | IDashboardToggleRightPaneAction;
type MapDispatchToProps = (dispatch: ThunkDispatch<IAppState, void, Actions>) => IDashboardPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (
    dispatch: ThunkDispatch<IAppState, void /* Extra Arguments*/, Actions>
): IDashboardPropsFromDispatch => (
        {
            jobTileOnClick: (actionPayload: IDashboardToggleRightPanePayload): IDashboardToggleRightPaneAction =>
                dispatch(dashboardToggleRightPane(actionPayload)),
            getData: (): void => { dispatch(dashboardGetData()); },
        }
    );

const DashboardContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IDashboardProps>(DashboardComponent);

export default DashboardContainer;

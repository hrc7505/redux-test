import { combineReducers, Reducer } from "redux";

import DASHBOARD_LOAD_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_LOAD_DATA";
import DASHBOARD_REQUEST_DATA from "content/dashboard/duck/actionTypes/DASHBOARD_REQUEST_DATA";
import IContentState from "content/dashboard/duck/interfaces/IContentState";
import IDashboardLoadDataAction from "content/dashboard/duck/actions/interfaces/IDashboardLoadDataAction";
import IDashboardRequestDataAction from "content/dashboard/duck/actions/interfaces/IDashboardRequestDataAction";
import IDashboardState from "content/dashboard/duck/interfaces/IDashboardState";
import rightPaneReducer from "content/common/rightPane/duck/rightPaneReducer";

type ContentAction =
    IDashboardLoadDataAction |
    IDashboardRequestDataAction;

const contentDefaultState: IContentState = {
    isLoading: false,
    activeJobs: [],
    sites: [],
};

const contentReducer: Reducer<IContentState, ContentAction> =
    (state: IContentState, action: ContentAction): IContentState => {
        switch (action.type) {
            case DASHBOARD_REQUEST_DATA:
                return {
                    ...state,
                    isLoading: true,
                };
            case DASHBOARD_LOAD_DATA:
                return {
                    ...state,
                    isLoading: false,
                    activeJobs: action.payload.activeJobs,
                    sites: action.payload.sites,
                };
            default:
                return state || contentDefaultState;
        }
    };

const dashboardReducer: Reducer<IDashboardState> =
    combineReducers<IDashboardState>({
        contentState: contentReducer,
        rightPaneState: rightPaneReducer("dashboard"),
    }
);

export default dashboardReducer;

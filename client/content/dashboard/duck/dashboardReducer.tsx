import * as React from "react";

import DASHBOARD_CLOSE_RIGHT_PANE from "./actionTypes/DASHBOARD_CLOSE_RIGHT_PANE";
import DASHBOARD_LOAD_DATA from "./actionTypes/DASHBOARD_LOAD_DATA";
import DASHBOARD_REQUEST_DATA from "./actionTypes/DASHBOARD_REQUEST_DATA";
import DASHBOARD_TOGGLE_RIGHT_PANE from "./actionTypes/DASHBOARD_TOGGLE_RIGHT_PANE";
import IDashboardState from "./interfaces/IDashboardState";
import IDashboardCloseRightPaneAction from "./actions/interfaces/IDashboardCloseRightPaneAction";
import IDashboardLoadDataAction from "./actions/interfaces/IDashboardLoadDataAction";
import IDashboardRequestDataAction from "./actions/interfaces/IDashboardRequestDataAction";
import IDashboardToggleRightPaneAction from "./actions/interfaces/IDashboardToggleRightPaneAction";

type Action =
    IDashboardToggleRightPaneAction |
    IDashboardCloseRightPaneAction |
    IDashboardLoadDataAction |
    IDashboardRequestDataAction;

const emptyRightPaneContent: JSX.Element = <div key={"placeholder"} />;

const dashboardDefaultState: IDashboardState = {
    isRightPaneVisible: false,
    rightPaneHeaderText: "default header",
    rightPaneContent: emptyRightPaneContent,
    isLoading: false,
    activeJobs: [],
    sites: [],
};

export default function dashboardReducer(state: IDashboardState, action: Action): IDashboardState {
    switch (action.type) {
        case DASHBOARD_TOGGLE_RIGHT_PANE:
            if (state.rightPaneContent.key === action.payload.rightPaneContent.key) {
                // We want to be a toggle control if the data is the same.
                return {
                    ...state,
                    isRightPaneVisible: !state.isRightPaneVisible,
                    rightPaneHeaderText: action.payload.rightPaneHeaderText,
                    rightPaneContent: action.payload.rightPaneContent,
                    rightPaneFooterRender: action.payload.rightPaneFooterRender
                        ? action.payload.rightPaneFooterRender
                        : null
                };
            } else {
                // We want to load the new data into the right pane and open the pane.
                return {
                    ...state,
                    isRightPaneVisible: true,
                    rightPaneHeaderText: action.payload.rightPaneHeaderText,
                    rightPaneContent: action.payload.rightPaneContent,
                    rightPaneFooterRender: action.payload.rightPaneFooterRender
                        ? action.payload.rightPaneFooterRender
                        : null,
                };
            };
        case DASHBOARD_CLOSE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: false,
            };
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
            }
        default:
            return state || dashboardDefaultState;
    }
}

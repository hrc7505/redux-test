import * as React from "react";

import DASHBOARD_TOGGLE_RIGHT_PANE from "./action-types/DASHBOARD_TOGGLE_RIGHT_PANE";
import IDashboardState from "./interfaces/IDashboardState";
import IDashboardToggleRightPaneAction from "./actions/interfaces/IDashboardToggleRightPaneAction";
import IRightPaneSummaryProps from "../../common/jobSummaryTile/rightPaneSummary/interfaces/IRightPaneSummaryProps";
import RightPaneSummary from "../../common/jobSummaryTile/rightPaneSummary/rightPaneSummary";

type Action = IDashboardToggleRightPaneAction;

const emptyRightPaneSummaryProps: IRightPaneSummaryProps = {
    jobTitle: "placeholder",
    jobId: "placeholder",
    jobCreatedDate: "placeholder",
    jobStatus: "placeholder",
    jobSite: "placeholder"
};

const emptyRightPaneSummary: JSX.Element = <RightPaneSummary key={"placeholder"} {...emptyRightPaneSummaryProps} />;

const dashboardDefaultState: IDashboardState = {
    isRightPaneVisible: false,
    rightPaneData: emptyRightPaneSummary
};

export default function dashboardReducer(state: IDashboardState, action: Action): IDashboardState {
    switch (action.type) {
        case DASHBOARD_TOGGLE_RIGHT_PANE:
            if (state.rightPaneData === null) {
                return state;
            }

            if (state.rightPaneData.key === action.rightPaneData.key) {
                // We want to be a toggle control if the data is the same.
                return {
                    isRightPaneVisible: !state.isRightPaneVisible,
                    rightPaneData: action.rightPaneData
                };
            } else {
                // We want to load the new data into the right pane and open the pane.
                return {
                    isRightPaneVisible: true,
                    rightPaneData: action.rightPaneData
                };
            }

        default:
            return state || dashboardDefaultState;
    }
}

import * as React from "react";

import DASHBOARD_TOGGLE_RIGHT_PANE from "./action-types/DASHBOARD_TOGGLE_RIGHT_PANE";
import IDashboardState from "./interfaces/IDashboardState";
import IDashboardToggleRightPaneAction from "./actions/interfaces/IDashboardToggleRightPaneAction";

type Action = IDashboardToggleRightPaneAction;

const emptyRightPaneContent: JSX.Element = <div key={"placeholder"} />;

const dashboardDefaultState: IDashboardState = {
    isRightPaneVisible: false,
    rightPaneHeaderText: "default header",
    rightPaneContent: emptyRightPaneContent
};

export default function dashboardReducer(state: IDashboardState, action: Action): IDashboardState {
    switch (action.type) {
        case DASHBOARD_TOGGLE_RIGHT_PANE:
            if (state.rightPaneContent.key === action.payload.rightPaneContent.key) {
                // We want to be a toggle control if the data is the same.
                return {
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
                    isRightPaneVisible: true,
                    rightPaneHeaderText: action.payload.rightPaneHeaderText,
                    rightPaneContent: action.payload.rightPaneContent,
                    rightPaneFooterRender: action.payload.rightPaneFooterRender
                        ? action.payload.rightPaneFooterRender
                        : null
                };
            }

        default:
            return state || dashboardDefaultState;
    }
}

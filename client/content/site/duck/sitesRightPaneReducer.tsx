import * as React from "react";

import ISitesRightPaneState from "./interfaces/ISitesRightPaneState";
import ISitesToggleRightPaneAction from "./actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPaneByJobTileAction from "./actions/interfaces/ISitesToggleRightPaneByJobTileAction";
import SITES_TOGGLE_RIGHT_PANE from "./action-types/SITES_TOGGLE_RIGHT_PANE";
import SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE from "./action-types/SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE";

type Action = ISitesToggleRightPaneAction | ISitesToggleRightPaneByJobTileAction;

const emptyRightPaneContent: JSX.Element = <div key="placeholder" />;

const defaultState: ISitesRightPaneState = {
    isRightPaneVisible: false,
    rightPaneData: {
        rightPaneHeaderText: "default header",
        rightPaneContent: emptyRightPaneContent
    }
};

export default function sitesRightPaneReducer(state: ISitesRightPaneState, action: Action): ISitesRightPaneState {
    switch (action.type) {
        case SITES_TOGGLE_RIGHT_PANE:
            if (!state.rightPaneData.rightPaneContent.key) {
                return {
                    rightPaneData: action.payload,
                    isRightPaneVisible: !state.isRightPaneVisible
                };
            } else {
                return {
                    rightPaneData: action.payload,
                    isRightPaneVisible: true
                };
            }

        case SITES_TOGGLE_RIGHT_PANE_BY_JOB_TILE:
            if (state.rightPaneData.rightPaneContent.key === action.payload.rightPaneContent.key) {
                // We want to be a toggle control if the data is the same.
                return {
                    isRightPaneVisible: !state.isRightPaneVisible,
                    rightPaneData: {
                        rightPaneHeaderText: action.payload.rightPaneHeaderText,
                        rightPaneContent: action.payload.rightPaneContent,
                        rightPaneFooterRender: action.payload.rightPaneFooterRender
                            ? action.payload.rightPaneFooterRender
                            : null
                    }
                };
            } else {
                // We want to load the new data into the right pane and open the pane.
                return {
                    isRightPaneVisible: true,
                    rightPaneData: {
                        rightPaneHeaderText: action.payload.rightPaneHeaderText,
                        rightPaneContent: action.payload.rightPaneContent,
                        rightPaneFooterRender: action.payload.rightPaneFooterRender
                            ? action.payload.rightPaneFooterRender
                            : null
                    }
                };
            }

        default:
            return state || defaultState;
    }
}

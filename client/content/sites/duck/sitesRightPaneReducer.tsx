import * as React from "react";

import ISiteCloseRightPaneAction from "./actions/interfaces/ISiteCloseRightPaneAction";
import ISitesRightPaneState from "./interfaces/ISitesRightPaneState";
import ISitesToggleRightPaneAction from "./actions/interfaces/ISitesToggleRightPaneAction";
import SITE_CLOSE_RIGHT_PANE from "./actionTypes/SITE_CLOSE_RIGHT_PANE";
import SITES_TOGGLE_RIGHT_PANE from "./actionTypes/SITES_TOGGLE_RIGHT_PANE";

type Action = ISitesToggleRightPaneAction | ISiteCloseRightPaneAction;

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
            const oldKey: React.Key = state.rightPaneData.rightPaneContent.key;
            const newKey: React.Key = action.payload.rightPaneContent.key;

            if ((!oldKey && newKey) || (oldKey && !newKey)) {
                // First condition:  Right pane already opened and job tile clicked
                // Second condition: Right pane already opened and info button clicked
                // Keep right pane open if it is opened and action fired from somewhere else.
                return {
                    isRightPaneVisible: true,
                    rightPaneData: action.payload
                };
            }

            if (oldKey === newKey) {
                // We want to be a toggle control if the data is the same.
                return {
                    isRightPaneVisible: !state.isRightPaneVisible,
                    rightPaneData: action.payload
                };
            } else {
                // We want to load the new data into the right pane and open the pane.
                return {
                    isRightPaneVisible: true,
                    rightPaneData: action.payload
                };
            }

        case SITE_CLOSE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: false
            };

        default:
            return state || defaultState;
    }
}

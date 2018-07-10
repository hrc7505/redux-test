import * as React from "react";

import CLOSE_RIGHT_PANEL from "chrome/duck/actionTypes/CLOSE_RIGHT_PANEL";
import IChromeState from "chrome/duck/interfaces/IChromeState";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IToggleLeftPaneAction from "chrome/duck/actions/interfaces/IToggleLeftPaneAction";
import OPEN_RIGHT_PANEL from "chrome/duck/actionTypes/OPEN_RIGHT_PANEL";
import TOGGLE_LEFT_PANE from "chrome/duck/actionTypes/TOGGLE_LEFT_PANE";

type Action = IToggleLeftPaneAction | IOpenRightPanelAction | ICloseRightPanelAction;

const chromeDefaultState: IChromeState = {
    rightPanelData: {
        rightPanelId: "emptyId",
        rightPanelHeaderText: "empty header",
        rightPanelContent: <div>empty content</div>
    },
    isRightPanelVisible: false,
    isLeftPaneVisible: false
};

export default function chromeReducer(state: IChromeState, action: Action): IChromeState {
    switch (action.type) {
        case TOGGLE_LEFT_PANE:
            return {
                ...state,
                isLeftPaneVisible: !state.isLeftPaneVisible
            };

        case OPEN_RIGHT_PANEL:
            return {
                ...state,
                rightPanelData: action.payload,
                isRightPanelVisible: true,
            };

        case CLOSE_RIGHT_PANEL:
            return {
                ...state,
                isRightPanelVisible: false
            };

        default:
            return state || chromeDefaultState;
    }
}

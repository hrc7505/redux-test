import * as React from "react";
import { Reducer } from "redux";

import ICloseRightPaneAction from "content/common/rightPane/duck/actions/interfaces/ICloseRightPaneAction";
import IToggleSwitchRightPaneAction from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPaneAction";
import IRightPaneState from "content/common/rightPane/duck/interfaces/IRightPaneState";

type Action = ICloseRightPaneAction | IToggleSwitchRightPaneAction;
type CreateRightPaneReducer = (name: string) => Reducer<IRightPaneState, Action>;

const emptyRightPaneContent: JSX.Element = <div> Empty </div>;

const rightPaneDefaultState: IRightPaneState = {
    isRightPaneVisible: false,
    rightPaneId: "emptyId",
    rightPaneHeaderText: "empty header",
    rightPaneContent: emptyRightPaneContent,
};

const rightPaneReducer: CreateRightPaneReducer = (name: string): Reducer<IRightPaneState, Action> =>
    (state: IRightPaneState, action: Action): IRightPaneState => {
        switch (action.type) {
            case `${name.toUpperCase()}_TOGGLE_SWITCH_RIGHT_PANE`:

                // It appears that typescript cannot figure out that within this case statement,
                // action should be of type _TOGGLE_SWITCH_RIGHT_PANE and that it has a payload.
                // The hack is to cast action and then continue as normal. This is risky because
                // the casting might not work or it'll hide other issues. However, I do not have
                // a better solution for this issue.
                const toggleSwitchAction: IToggleSwitchRightPaneAction = action as IToggleSwitchRightPaneAction;

                if (state.rightPaneId === toggleSwitchAction.payload.rightPaneId) {
                    // We want to be a toggle control if the data is the same.
                    return {
                        ...state,
                        isRightPaneVisible: !state.isRightPaneVisible
                    };
                } else {
                    // We want to load the new data into the right pane and open the pane.
                    return {
                        isRightPaneVisible: true,
                        rightPaneId: toggleSwitchAction.payload.rightPaneId,
                        rightPaneHeaderText: toggleSwitchAction.payload.rightPaneHeaderText,
                        rightPaneContent: toggleSwitchAction.payload.rightPaneContent,
                        rightPaneFooterRender: toggleSwitchAction.payload.rightPaneFooterRender
                            ? toggleSwitchAction.payload.rightPaneFooterRender
                            : null,
                    };
                }
            case `${name.toUpperCase()}_CLOSE_RIGHT_PANE`:
                return {
                    ...state,
                    isRightPaneVisible: false
                };
            default:
                return state || rightPaneDefaultState;
        }
    };

export default rightPaneReducer;

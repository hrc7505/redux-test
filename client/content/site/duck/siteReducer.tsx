import * as React from "react";

import GET_SITE_PAGE_CONTENTS from "./action-types/GET_SITE_PAGE_CONTENTS";
import IGetSitePageContentsAction from "./actions/interfaces/iGetSitePageContentsAction";
import ISiteState from "../duck/interfaces/ISiteState";
import ISiteToggleRightPaneAction from "./actions/interfaces/ISiteToggleRightPaneAction";
import ISiteToggleRightPanePayload from "./actions/interfaces/ISiteToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import SITE_TOGGLE_RIGHT_PANE from "./action-types/SITE_TOGGLE_RIGHT_PANE";
import Test1 from "../../right-panel-body-components/Test1";

type Action = IGetSitePageContentsAction | ISiteToggleRightPaneAction;

const rightPaneData: ISiteToggleRightPanePayload = {
    rightPaneHeaderText: "HeaderText of the right pane",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IToggleRightPanelPayload = {
    rightPanelHeaderText: "Add New Site",
    rightPanelContent: <Test1 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

export default function siteReducer(state: ISiteState, action: Action): ISiteState {
    switch (action.type) {
        case GET_SITE_PAGE_CONTENTS:
            return {
                ...state,
                headerData: {
                    title: "Sites",
                    commands: {
                        farItems: [
                            {
                                iconProps: {
                                    iconName: "Info",
                                    iconType: IconType.default
                                },
                                key: "information",
                                rightPaneData,
                            }
                        ],
                        items: [
                            {
                                iconProps: {
                                    iconName: "CirclePlus",
                                    iconType: IconType.default
                                },
                                key: "site",
                                name: "Site",
                                rightPanelData
                            },
                        ],
                        overflowItems: [],
                    }
                }
            };

        case SITE_TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible,
                rightPaneData: action.payload
            };

        default:
            return state || {
                ...state,
                headerData: null
            };
    }
}

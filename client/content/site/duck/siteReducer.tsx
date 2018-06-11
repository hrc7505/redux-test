import * as React from "react";

import GET_SITE_PAGE_CONTENTS from "./action-types/GET_SITE_PAGE_CONTENTS";
import IGetSitePageContentsAction from "./actions/interfaces/iGetSitePageContentsAction";
import ISiteState from "../duck/interfaces/ISiteState";
import IToggleRightPaneAction from "./actions/interfaces/IToggleRightPaneAction";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import Test1 from "../../right-panel-body-components/Test1";
import TOGGLE_RIGHT_PANE from "./action-types/TOGGLE_RIGHT_PANE";

type Action = IGetSitePageContentsAction | IToggleRightPaneAction;

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
                                rightPaneData: "Right pane for site page",
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
                                rightPanelData: {
                                    headerTitle: "Add New Site",
                                    body: <Test1 />
                                }
                            },
                        ],
                        overflowItems: [],
                    }
                }
            };

        case TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible,
                rightPaneData: action.rightPaneData
            };

        default:
            return state || {
                ...state,
                headerData: null
            };
    }
}

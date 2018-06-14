import * as React from "react";

import GET_INDIVIDUAL_SITE_PAGE_CONTENTS from "./action-types/GET_INDIVIDUAL_SITE_PAGE_CONTENTS";
import GET_SITES_PAGE_CONTENTS from "./action-types/GET_SITES_PAGE_CONTENTS";
import IGetIndividualSitePageContentsAction from "./actions/interfaces/IGetIndividualSitePageContentsAction";
import IGetSitesPageContentsAction from "./actions/interfaces/IGetSitesPageContentsAction";
import ISitesState from "../duck/interfaces/ISitesState";
import ISitesToggleRightPanePayload from "./actions/interfaces/ISitesToggleRightPanePayload";
import ISiteToggleRightPaneAction from "./actions/interfaces/ISiteToggleRightPaneAction";
import IToggleRightPanelPayload from "../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import SITES_TOGGLE_RIGHT_PANE from "./action-types/SITES_TOGGLE_RIGHT_PANE";
import Test1 from "../../right-panel-body-components/test1";

type Action = IGetSitesPageContentsAction | ISiteToggleRightPaneAction | IGetIndividualSitePageContentsAction;

const rightPaneData: ISitesToggleRightPanePayload = {
    rightPaneHeaderText: "HeaderText of the right pane",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IToggleRightPanelPayload = {
    rightPanelHeaderText: "Add New Site",
    rightPanelContent: <Test1 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

export default function sitesReducer(state: ISitesState, action: Action): ISitesState {
    switch (action.type) {
        case GET_SITES_PAGE_CONTENTS:
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

        case SITES_TOGGLE_RIGHT_PANE:
            return {
                ...state,
                isRightPaneVisible: !state.isRightPaneVisible,
                rightPaneData: action.payload
            };

        case GET_INDIVIDUAL_SITE_PAGE_CONTENTS:
            return {
                ...state,
                headerData: {
                    title: "Individual Site Name",
                    breadcrumb: {
                        items: [
                            { text: "Sites", key: "sites" },
                            { text: "Individual Site Name", key: "individualSite", isCurrentItem: true }
                        ]
                    },
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
                                key: "asset",
                                name: "Asset",
                                rightPanelData
                            },
                            {
                                iconProps: {
                                    iconName: "CirclePlus",
                                    iconType: IconType.default
                                },
                                key: "job",
                                name: "Job",
                                rightPanelData
                            },
                            {
                                iconProps: {
                                    iconName: "CirclePlus",
                                    iconType: IconType.default
                                },
                                key: "files",
                                name: "Files",
                                rightPanelData
                            },
                            {
                                iconProps: {
                                    iconName: "CirclePlus",
                                    iconType: IconType.default
                                },
                                key: "permissions",
                                name: "Permissions",
                                rightPanelData
                            },
                        ],
                        overflowItems: [],
                    }
                }
            };

        default:
            return state || {
                ...state,
                headerData: null
            };
    }
}

import * as React from "react";

import GET_SITE_PAGE_CONTENTS from "./action-types/GET_SITE_PAGE_CONTENTS";
import IGetSitePageContentsAction from "./actions/interfaces/iGetSitePageContentsAction";
import ISiteComponentProps from "../interfaces/iSiteComponentProps";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import Test1 from "../../../right-panel-body-components/Test1";
import Test2 from "../../../right-panel-body-components/Test2";

type Action = IGetSitePageContentsAction;

export default function siteReducer(state: ISiteComponentProps, action: Action): ISiteComponentProps {
    switch (action.type) {
        case GET_SITE_PAGE_CONTENTS:
            return {
                ...state,
                headerData: {
                    title: "Sites in site reducer",
                    breadcrumb: {
                        items: [
                            { text: "Home", key: "home" },
                            { text: "Sites", key: "sites", isCurrentItem: true },
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
                                data: "Right pane for site page",
                                type: "RIGHT_PEN"
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
                                data: <Test1 />
                            },
                            {
                                iconProps: {
                                    iconName: "CirclePlus",
                                    iconType: IconType.default
                                },
                                key: "job",
                                name: "Job",
                                data: <Test2 />,
                            }
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

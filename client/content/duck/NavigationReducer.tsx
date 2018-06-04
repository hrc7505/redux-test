import { createBrowserHistory, History } from "history";
import * as React from "react";

import GET_CONTENTS from "./action-types/GET_CONTENTS";
import IGetContentsAction from "./actions/interfaces/IGetContentsAction";
import IHeaderComponentProps from "../body/site/header/interfaces/iHeaderComponentProps";
import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import Test1 from "../right-panel-body-components/Test1";
import Test2 from "../right-panel-body-components/Test2";

type Action = IGetContentsAction;
export const history: History = createBrowserHistory();

export default function navigationReducer(state: IHeaderComponentProps, action: Action): IHeaderComponentProps {
    switch (action.type) {
        case GET_CONTENTS:
            return getContents(state, action.url);

        default:
            return state || getContents(state, action.url);
    }
}

function getContents(state: IHeaderComponentProps, url: string): IHeaderComponentProps {
    switch (url) {
        case "/":
            return {
                ...state,
                title: "Dashboard",
                breadcrumb: {
                    items: [
                        { text: "Home", key: "home", isCurrentItem: true },
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
                            data: "Right pane for Dashboard",
                            type: "RIGHT_PEN"
                        }
                    ],
                    items: [
                        {
                            key: "asset",
                            name: "Asset",
                            data: "No body avlaible to show"
                        }
                    ],
                    overflowItems: [],
                }
            };
        case "/sites":
            return {
                ...state,
                title: "Sites",
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
            };

        default:
            return state || {
                ...state,
                breadcrumb: {} as IBreadcrumbProps,
                commands: {
                    farItems: [],
                    items: [],
                    overflowItems: [],
                },
                title: "Default State"
            };
    }
}

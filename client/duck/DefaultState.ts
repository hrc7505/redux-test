import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IconType } from "office-ui-fabric-react/lib/Icon";

import IAppState from "./State";

const commandBarProps: ICommandBarProps = {
    farItems: [
        {
            iconProps: {
                iconName: "Info",
                iconType: IconType.default
            },
            key: "information",
        }
    ],
    items: [
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "asset",
            name: "Asset"
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "job",
            name: "Job",
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "files",
            name: "Files",
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "permissions",
            name: "Permissions"
        }
    ],
    overflowItems: [],
};

const defaultState: IAppState = {
    childComponent: null,
    commandBarProps,
    isRightPanelVisible: false,
    isLeftMenuVisible: false,
    isRightPaneVisible: false
};

export default defaultState;

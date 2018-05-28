import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IconType } from "office-ui-fabric-react/lib/Icon";

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

export default interface IAppState {
    isLeftMenuVisible: boolean;
    isRightPanelVisible: boolean;
    commandBarProps: ICommandBarProps;
}

export const defaultState: IAppState = {
    commandBarProps,
    isLeftMenuVisible: true,
    isRightPanelVisible: false,
};

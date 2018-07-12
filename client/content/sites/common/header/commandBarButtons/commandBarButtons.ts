import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { IconType } from "office-ui-fabric-react/lib/Icon";

import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import ICommandButton from "content/sites/common/header/commandBarButtons/interfaces/ICommandButton";

export default class CommandBarButtons {
    public static getButton(commandButton: ICommandButton): IContextualMenuItem {
        switch (commandButton.type) {
            case ButtonType.Add:
                return {
                    iconProps: {
                        iconName: "CirclePlus",
                        iconType: IconType.default
                    },
                    key: commandButton.name,
                    name: commandButton.name,
                };

            case ButtonType.Info:
                return {
                    iconProps: {
                        iconName: "Info",
                        iconType: IconType.default
                    },
                    key: "information",
                };

            case ButtonType.Permissions:
                return {
                    iconProps: {
                        iconName: "Group",
                        iconType: IconType.default
                    },
                    key: "permissions",
                    name: commandButton.name,
                };

            default:
                break;
        }
    }
}

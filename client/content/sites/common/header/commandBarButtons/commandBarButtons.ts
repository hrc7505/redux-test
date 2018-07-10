import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { IconType } from "office-ui-fabric-react/lib/Icon";

import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";

export default class CommandBarButtons {
    public static getButton(commandButton: ICommandButton): IContextualMenuItem {
        switch (commandButton.id) {
            case ButtonType.Add:
                return {
                    iconProps: {
                        iconName: "CirclePlus",
                        iconType: IconType.default
                    },
                    key: commandButton.name,
                    name: commandButton.name,
                    actionPayload: commandButton.actionPayload
                };

            case ButtonType.Info:
                return {
                    iconProps: {
                        iconName: "Info",
                        iconType: IconType.default
                    },
                    key: "information",
                    actionPayload: commandButton.actionPayload,
                };

            default:
                break;
        }
    }
}

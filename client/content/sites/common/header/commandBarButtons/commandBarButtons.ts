import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { IconType } from "office-ui-fabric-react/lib/Icon";

import ButtonType from "./enums/buttonType";
import ICommandButton from "../commandBarButtons/ICommandButton";

export default class CommandBarButtons {
    public static getButton(commandButton: ICommandButton): IContextualMenuItem {
        switch (commandButton.id) {
            case ButtonType.add:
                return {
                    iconProps: {
                        iconName: "CirclePlus",
                        iconType: IconType.default
                    },
                    key: commandButton.name,
                    name: commandButton.name,
                    actionPayload: commandButton.actionPayload
                };

            case ButtonType.info:
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

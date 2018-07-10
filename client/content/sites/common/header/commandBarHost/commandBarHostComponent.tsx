import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import CommandBarButtons from "content/sites/common/header/commandBarButtons/commandBarButtons";
import ICommandBarHostProps from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostProps";
import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

import "content/sites/common/header/commandBarHost/commandBarHostStyle.scss";

export default class CommandbarHostComponent extends React.PureComponent<ICommandBarHostProps> {
    constructor(props: ICommandBarHostProps) {
        super(props);
        this.createCommandBarMenuItems(props.buttonList);
    }

    private items: IContextualMenuItem[];
    private overflowItems: IContextualMenuItem[];
    private farItems: IContextualMenuItem[];

    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="cPanel commandBarContainer" >
                <CommandBar
                    elipisisAriaLabel="More options"
                    items={this.items}
                    overflowItems={this.overflowItems}
                    farItems={this.farItems}
                />
            </div>
        );
    }

    // TODO: Remove componentWillReceiveProps as it is deprecated and should not be used.
    public componentWillReceiveProps(nextProps: ICommandBarHostProps): void {
        if (this.props.buttonList !== nextProps.buttonList) {
            this.createCommandBarMenuItems(nextProps.buttonList);
        }
    }

    private createCommandBarMenuItems(buttonList: ICommandButton[]): void {
        const items: IContextualMenuItem[] = [];
        const farItems: IContextualMenuItem[] = [];
        const overflowItems: IContextualMenuItem[] = [];

        buttonList.map((data: ICommandButton) => {
            const menuItem: IContextualMenuItem = CommandBarButtons.getButton(data);

            if (data.itemLocation === ItemLocation.Left) {
                if (data.actionPayload) {
                    if (this.props.isStandAlone) {
                        menuItem.onClick = (): void => this.props.toggleRightPane({
                            rightPaneId: "standAloneModeId",
                            rightPaneContent: null,
                            rightPaneHeaderText: `Sites is in standalone mode.
                                                We are not able to open right panel because it is a part of chrome.`
                        });
                    } else {
                        menuItem.onClick = (): void => this.props.openRightPanel(
                            data.actionPayload as IOpenRightPanelPayload
                        );
                    }
                } else if (data.id === ButtonType.Link) {
                    // If button has a navigation link we can give an event here.
                    // For now it is set to null becasuse we do not have any link for button yet.
                    menuItem.onClick = null;
                } else {
                    menuItem.onClick = null;
                }

                items.push(menuItem);
            } else if (data.itemLocation === ItemLocation.Far) {
                menuItem.onClick = data.actionPayload
                    ? (): void => this.props.toggleRightPane(data.actionPayload as IToggleSwitchRightPanePayload)
                    : null;
                farItems.push(menuItem);
            } else {
                overflowItems.push(menuItem);
            }
        });

        this.items = items;
        this.farItems = farItems;
        this.overflowItems = overflowItems;
    }
}

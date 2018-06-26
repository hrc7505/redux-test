import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import CommandBarButtons from "../buttons/commandBarButtons";
import ICommandBarHostProps from "./interfaces/ICommandBarHostProps";
import ICommandButton from "../duck/actions/interfaces/ICommandButton";
import ItemLocation from "../buttons/itemLocation";

import "./commandBarHostStyle.scss";
import IOpenRightPanelPayload from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

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
                menuItem.onClick = data.actionPayload
                    ? (): void => this.props.openRightPanel(data.actionPayload as IOpenRightPanelPayload)
                    : null;
                items.push(menuItem);
            } else if (data.itemLocation === ItemLocation.Far) {
                menuItem.onClick = data.actionPayload
                    ? (): void => this.props.siteButtonOnClick(data.actionPayload as IToggleSwitchRightPanePayload)
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

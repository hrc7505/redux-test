import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import ICommandBarComponentProps from "./interfaces/ICommandBarComponentProps";

import "./commandBarStyle.scss";

export default class CommandbarComponent extends React.PureComponent<ICommandBarComponentProps> {
    public render(): JSX.Element | JSX.Element[] {
        const { items, overflowItems, farItems } = this.props;

        this.addClickHandlerToItems(items);
        this.addClickHandlerToItems(farItems);
        this.addClickHandlerToItems(overflowItems);

        return (
            <div className="cPanel commandBarContainer" >
                <CommandBar
                    elipisisAriaLabel="More options"
                    items={items}
                    overflowItems={overflowItems}
                    farItems={farItems}
                />
            </div>
        );
    }

    private addClickHandlerToItems = (items: IContextualMenuItem[]): void => {
        if (items) {
            items.map((data: IContextualMenuItem) => {
                if (data.rightPanelData) {
                    data.onClick = (): void => this.props.openRightPanel(data.rightPanelData);
                } else if (data.rightPaneData) {
                    data.onClick = (): void => this.props.siteButtonOnClick(data.rightPaneData);
                }
            });
        }
    }
}

import { CommandBar, ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import * as React from "react";

import "./CommandComponentBarStyle.scss";

interface IState {
    areIconsVisible: boolean;
    areItemsEnabled: boolean;
    areNamesVisible: boolean;
}

export default class CommandbarComponent extends React.Component<ICommandBarProps, IState> {

    constructor(props: ICommandBarProps) {
        super(props);
        this.state = {
            areIconsVisible: true,
            areItemsEnabled: true,
            areNamesVisible: true,
        };
    }

    public render(): JSX.Element {
        const { items, overflowItems, farItems } = this.props;

        const filteredItems: IContextualMenuItem[] = items.map((item: IContextualMenuItem) => (
            this.getMenuItemProps(item)
        ));

        const filteredOverflowItems: IContextualMenuItem[] = overflowItems.map((item: IContextualMenuItem) => (
            this.getMenuItemProps(item)
        ));

        const filteredFarItems: IContextualMenuItem[] = farItems.map((item: IContextualMenuItem) => (
            this.getMenuItemProps(item)
        ));

        return (
            <div className="cPanel commandBarContainer" >
                <CommandBar
                    elipisisAriaLabel="More options"
                    items={filteredItems}
                    overflowItems={filteredOverflowItems}
                    farItems={filteredFarItems}
                />
            </div>
        );
    }

    private getMenuItemProps(item: IContextualMenuItem): IContextualMenuItem {
        const { areIconsVisible, areNamesVisible, areItemsEnabled } = this.state;

        return {
            ...item,
            ...{
                disabled: !areItemsEnabled,
                icon: areIconsVisible ? item.icon : "",
                iconOnly: !areNamesVisible
            }
        };
    }
}

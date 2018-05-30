import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import { IContextualMenuItem } from "office-ui-fabric-react/lib/ContextualMenu";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import ICommandBarComponentProps from "./models/ICommandBarComponentProps";

import "./CommandBarComponentStyle.scss";

export default class CommandbarComponent extends React.Component<ICommandBarComponentProps> {
    constructor(props: ICommandBarComponentProps) {
        super(props);
console.log(props);

        const { items, farItems } = props.commandBarReducer.commandBarProps;
        this.addClickHandlerToItems(items);
        this.addClickHandlerToItems(farItems);
    }

    public render(): JSX.Element | JSX.Element[] {
        const { items, overflowItems, farItems } = this.props.commandBarReducer.commandBarProps;

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
        items.map((data: IContextualMenuItem) => {
            data.onClick = (): void => this.setAction(data);
        });
    }

    private setAction(item: IContextualMenuItem): void {
        switch (item.key) {
            case "asset":
                this.props.openRightPanel(<Test1 />);
                break;

            case "job":
                this.props.openRightPanel(<Test2 />);
                break;

            case "information":
                this.props.toggleRightPane();
                break;
        }
    }
}

const Test1: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <TextField label="Site Name:*" placeholder="Site Name" errorMessage="Site Name is mandatory" />
        {
            // tslint:disable-next-line:no-magic-numbers
            <TextField multiline rows={4} label="Site Description:" placeholder="Description here..." />
        }
        <TextField label="Phone Number:" placeholder="+1 123456789" />
        <TextField label="Street:*" placeholder="Street" />
        <TextField label="City:*" placeholder="City" />
        <TextField label="Postal Code:*" placeholder="Postal Code" />
        <Dropdown
            placeHolder="Select a City"
            label="Country:*"
            options={
                [
                    { key: "A", text: "Newyork" },
                    { key: "B", text: "Delhi" },
                    { key: "C", text: "Shangai" },
                    { key: "D", text: "Surray" },
                    { key: "E", text: "London" }
                ]
            }
        />
        <Dropdown
            placeHolder="Select a Province/State"
            label="Province/State:*"
            options={
                [
                    { key: "A", text: "State1" },
                    { key: "B", text: "State2" },
                    { key: "C", text: "State3" },
                    { key: "D", text: "State4" },
                    { key: "E", text: "State5" }
                ]
            }
        />
    </div>
);

const Test2: React.SFC<object> = (): JSX.Element => (
    <div style={{ background: "red" }}>
        Hello this is component
    <span style={{ fontSize: "25px" }}> 2</span>
    </div>
);

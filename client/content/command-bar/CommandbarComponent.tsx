import { CommandBar, ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import { IOpenRightPanelAction } from "../../duck/Actions";

import "./CommandComponentBarStyle.scss";

export interface ICommandBarComponentProps {
    commandBarProps: ICommandBarProps;
    openRightPanel: (child: JSX.Element) => IOpenRightPanelAction;
}

export default class CommandbarComponent extends React.Component<ICommandBarComponentProps> {
    public render(): JSX.Element {
        const { items, overflowItems, farItems } = this.props.commandBarProps;

        return (
            <div className="cPanel commandBarContainer" >
                <button onClick={(): IOpenRightPanelAction => this.props.openRightPanel(<Test1 />)}>
                    Show compoment1
                </button>
                <button onClick={(): IOpenRightPanelAction => this.props.openRightPanel(<Test2 />)}>
                    Show compoment2
                </button>
                <CommandBar
                    elipisisAriaLabel="More options"
                    items={items}
                    overflowItems={overflowItems}
                    farItems={farItems}
                />
            </div>
        );
    }
}

export const Test1: React.SFC<object> = (): JSX.Element => (
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

import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import * as React from "react";

import ICommandBarHostProps from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostProps";

import "content/sites/common/header/commandBarHost/commandBarHostStyle.scss";

export default class CommandbarHostComponent extends React.PureComponent<ICommandBarHostProps> {
    public render(): JSX.Element | JSX.Element[] {
        return (
            <div className="cPanel commandBarContainer" >
                <CommandBar
                    elipisisAriaLabel="More options"
                    {...this.props.commandbarItems}
                />
            </div>
        );
    }
}

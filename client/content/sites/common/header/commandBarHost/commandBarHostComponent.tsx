import { CommandBar } from "office-ui-fabric-react/lib/CommandBar";
import * as React from "react";

import ICommandBarHostPropsFromState from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromState";

import "content/sites/common/header/commandBarHost/commandBarHostStyle.scss";

export default class CommandbarHostComponent extends React.PureComponent<ICommandBarHostPropsFromState> {
    public render(): JSX.Element {
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

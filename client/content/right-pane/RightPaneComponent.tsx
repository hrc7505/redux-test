import * as React from "react";

import IRightPaneComponentProps from "./models/IRightPaneComponentProps";

import "./RightPaneComponentStyle.scss";

const RightPaneComponent: React.SFC<IRightPaneComponentProps> = (props: IRightPaneComponentProps): JSX.Element => (
    props.isRightPaneVisible
        ? <div className="rightPane pullLeft">
            {props.childComponent}
        </div>
        : null
);

export default RightPaneComponent;

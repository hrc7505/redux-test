import * as React from "react";

import IRightPaneComponentProps from "./interfaces/IRightPaneComponentProps";

import "./RightPaneComponentStyle.scss";

const RightPaneComponent: React.SFC<IRightPaneComponentProps> = (props: IRightPaneComponentProps): JSX.Element => (
    <div className={`rightPane pullLeft ${!props.isRightPaneVisible ? "hidden" : ""}`}>
        {props.childComponent}
    </div>
);

export default RightPaneComponent;

import * as React from "react";

import IRightPaneProps from "./interfaces/IRightPaneProps";

import "./RightPaneStyle.scss";

const rightPaneComponent: React.SFC<IRightPaneProps> = (props: IRightPaneProps): JSX.Element => (
    <div className={`rightPane pullLeft ${!props.isRightPaneVisible ? "hidden" : ""}`}>
        <div className="rightPaneHeader">
            <div className="rightPaneHeaderText"> {props.rightPaneHeaderText} </div>
        </div>
        <div className="rightPaneContent">
            {props.rightPaneContent}
        </div>
        {
            props.rightPaneFooterRender ?
                <div className="rightPaneFooter">
                    <div className="rightPaneFooterInner">
                        {props.rightPaneFooterRender()}
                    </div>
                </div>
                : null
        }
    </div>
);

export default rightPaneComponent;

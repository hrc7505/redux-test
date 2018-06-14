import * as React from "react";

import IContentComponentProps from "./interfaces/IContentComponentProps";
import Routes from "./routes";

import "./contentStyle.scss";

const ContentComponent: React.SFC<IContentComponentProps> = (props: IContentComponentProps): JSX.Element => (
    <div className={`contentComponent ${!props.isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
        <Routes />
    </div >
);

export default ContentComponent;

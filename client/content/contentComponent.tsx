import * as React from "react";

import IContentComponentProps from "content/interfaces/IContentComponentProps";
import Routes from "content/routes";

import "content/contentStyle.scss";

const contentComponent: React.SFC<IContentComponentProps> = (props: IContentComponentProps): JSX.Element => (
    <div className={`contentComponent ${!props.isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
        <Routes />
    </div >
);

export default contentComponent;

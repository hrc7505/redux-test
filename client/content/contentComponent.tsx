import * as React from "react";

import IContentComponentPropsFromState from "content/interfaces/IContentComponentPropsFromState";
import Routes from "content/routes";

import "content/contentStyle.scss";

const contentComponent: React.SFC<IContentComponentPropsFromState> =
    (props: IContentComponentPropsFromState): JSX.Element => (
        <div className={`contentComponent ${!props.isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
            <Routes />
        </div >
);

export default contentComponent;

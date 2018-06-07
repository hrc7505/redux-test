import * as React from "react";

import IContentComponentProps from "./interfaces/IContentComponentProps";
import Routes from "./Routes";

import "./ContentComponentStyle.scss";

export default class ContentComponent extends React.Component<IContentComponentProps> {
    public render(): JSX.Element {
        const { isLeftMenuVisible } = this.props;

        return (
            <div className={`contentComponent ${!isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
                <Routes />
            </div >
        );
    }
}

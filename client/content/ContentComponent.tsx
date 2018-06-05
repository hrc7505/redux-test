import { UnregisterCallback } from "history";
import * as React from "react";
import { withRouter } from "react-router-dom";

import IContentComponentProps from "./interfaces/IContentComponentProps";
import Routes from "./Routes";

import "./ContentComponentStyle.scss";

class ContentComponent extends React.Component<IContentComponentProps> {
    private unRegister: UnregisterCallback;

    public render(): JSX.Element {
        const { isLeftMenuVisible } = this.props;

        return (
            <div className={`contentComponent ${!isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
                <Routes />
            </div >
        );
    }

    public componentDidMount(): void {
        this.getContents();
        this.unRegister = this.props.history.listen(this.getContents);
    }

    public componentWillUnmount(): void {
        this.unRegister();
    }

    private getContents = (): void => {
        const url: string = this.props.history.location.pathname.split("/testcontent")[1];
        this.props.getContents(url);
    }
}

export default withRouter(ContentComponent) as React.ComponentType<IContentComponentProps>;

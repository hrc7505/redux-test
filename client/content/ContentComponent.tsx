import { UnregisterCallback } from "history";
import * as React from "react";
import { withRouter } from "react-router-dom";

import HeaderContainer from "./header/HeaderContainer";
import IContentComponentProps from "./models/IContentComponentProps";
import RightPaneContainer from "./right-pane/RightPaneContainer";
import Rootes from "./Rootes";

import "./ContentComponentStyle.scss";

class ContentComponent extends React.Component<IContentComponentProps> {
    private unRegister: UnregisterCallback;

    public render(): JSX.Element {
        return (
            <section className={`contentComponent ${!this.props.isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
                <HeaderContainer />
                <Rootes />
                <RightPaneContainer />
            </section>
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
        this.props.closeRightPane();
        this.props.getContents(this.props.history.location.pathname);
    }
}

export default withRouter(ContentComponent) as React.ComponentType<IContentComponentProps>;

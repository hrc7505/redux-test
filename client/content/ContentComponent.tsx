import { UnregisterCallback } from "history";
import * as React from "react";
import { withRouter } from "react-router-dom";

import HeaderContainer from "./header/HeaderContainer";
import IContentComponentProps from "./interfaces/IContentComponentProps";
import RightPaneContainer from "./right-pane/RightPaneContainer";
import Routes from "./Routes";

import "./ContentComponentStyle.scss";

class ContentComponent extends React.Component<IContentComponentProps> {
    private unRegister: UnregisterCallback;

    public render(): JSX.Element {
        const { isLeftMenuVisible, isRightPaneVisible } = this.props;

        return (
            <section className={`contentComponent ${!isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
                <HeaderContainer />
                <div className="pullLeft bodyRightPanelContainer">
                    <div className={`bodyContainer pullLeft ${isRightPaneVisible ? "shrink" : ""}`}>
                        <Routes />
                    </div>
                    <RightPaneContainer />
                </div>
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

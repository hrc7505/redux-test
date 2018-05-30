import * as React from "react";

import BodyComponent from "./body/BodyComponent";
import HeaderComponent from "./header/HeaderComponent";
import IContentComponentProps from "./models/IContentComponentProps";
import RightPaneContainer from "./right-pane/RightPaneContainer";

import "./ContentComponentStyle.scss";

const ContentComponent: React.SFC<IContentComponentProps> = (props: IContentComponentProps): JSX.Element => (
    <section className={`contentComponent ${!props.isLeftMenuVisible ? "cPanel" : "pullLeft"}`}>
        <HeaderComponent/>
        <BodyComponent/>
        <RightPaneContainer/>
    </section>
);

export default ContentComponent;

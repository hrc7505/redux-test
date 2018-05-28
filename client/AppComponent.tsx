import { initializeIcons } from "@uifabric/icons";
import * as React from "react";

import ContentContainer from "./content/ContentContainer";
import LeftPaneContainer from "./chrome/left-pane/LeftPaneContainer";
import RightPanelContainer from "./chrome/right-panel/RightPanelContainer";
import TopBarContainer from "./chrome/top-bar/TopBarContainer";

import "./common/common-style/CommonStyle.scss";

initializeIcons();

const AppComponent: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <LeftPaneContainer />
        <TopBarContainer />
        <ContentContainer />
        <RightPanelContainer/>
    </div>
);

export default AppComponent;

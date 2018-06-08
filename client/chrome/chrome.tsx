import * as React from "react";

import LeftPaneContainer from "./left-pane/LeftPaneContainer";
import RightPanelContainer from "./right-panel/RightPanelContainer";
import TopBarContainer from "./top-bar/TopBarContainer";

const chrome: React.SFC<object> = (): JSX.Element => (
    <React.Fragment>
        <LeftPaneContainer />
        <TopBarContainer />
        <RightPanelContainer />
    </React.Fragment>
);

export default chrome;

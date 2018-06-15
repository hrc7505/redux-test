import * as React from "react";

import LeftPaneContainer from "./leftPane/LeftPaneContainer";
import RightPanelContainer from "./rightPanel/RightPanelContainer";
import TopBarContainer from "./topBar/TopBarContainer";

const Chrome: React.SFC<object> = (): JSX.Element => (
    <React.Fragment>
        <LeftPaneContainer />
        <TopBarContainer />
        <RightPanelContainer />
    </React.Fragment>
);

export default Chrome;

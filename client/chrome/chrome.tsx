import * as React from "react";

import LeftPaneContainer from "chrome/leftPane/LeftPaneContainer";
import RightPanelContainer from "chrome/rightPanel/RightPanelContainer";
import TopBarContainer from "chrome/topBar/TopBarContainer";

const Chrome: React.SFC<object> = (): JSX.Element => (
    <React.Fragment>
        <LeftPaneContainer />
        <TopBarContainer />
        <RightPanelContainer />
    </React.Fragment>
);

export default Chrome;

import { initializeIcons } from "@uifabric/icons";
import * as React from "react";

// import ContentContainer from "./content/ContentContainer";
import LeftPaneContainer from "./chrome/left-pane/LeftPaneContainer";
import RightPanelContainer from "./chrome/right-panel/RightPanelContainer";
import TopBarContainer from "./chrome/top-bar/TopBarContainer";

import "./common/common-style/CommonStyle.scss";

export class AppComponent extends React.Component {
    constructor(props: object) {
        super(props);

        initializeIcons(undefined, { disableWarnings: true });
    }

    public render(): JSX.Element {
        console.log("rendering app");

        return (
            <div className="cPanel">
                <LeftPaneContainer />
                <TopBarContainer />
                <div id="contentPart" />
                {/* <ContentContainer /> */}
                <RightPanelContainer />
            </div >
        );
    }
}
import { initializeIcons } from "@uifabric/icons";
import * as React from "react";

import Dashboard from "./content/dashboard/Dashboard";
import HeaderContainer from "./chrome/header/HeaderContainer";
import LeftPaneComponent from "./chrome/left-pane/LeftPaneComponent";
import { IToggleMenu } from "./duck/State";

import "./common/common-style/CommonStyle.scss";

initializeIcons();

const AppComponent: React.SFC<IToggleMenu> = (props: IToggleMenu): JSX.Element => (
    <div className="cPanel">
        {
            props.isLeftMenuVisible
                ? <LeftPaneComponent />
                : null
        }
        <HeaderContainer />
        <Dashboard/>
    </div>
);

export default AppComponent;

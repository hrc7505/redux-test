import * as React from "react";

import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import HeaderContainer from "./header/HeaderContainer";
import { IToggleMenu } from "./header/top-bar/duck/State";

import "./common/common-style/CommonStyle.scss";
import Dashboard from "./dashboard/Dashboard";

const App: React.SFC<IToggleMenu> = (props: IToggleMenu): JSX.Element => (
    <div className="cPanel">
        {
            props.isLeftMenuVisible
                ? <HamburgerMenu />
                : null
        }
        <HeaderContainer />
        <Dashboard/>
    </div>
);

export default App;

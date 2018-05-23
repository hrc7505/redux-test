import * as React from "react";

import HamburgerMenu from "./hamburger-menu/HamburgerMenu";
import Header from "./header/Header";
import { IToggleMenu } from "./header/top-bar/State";

import "../common/common-style/CommonStyle.scss";

const App: React.SFC<IToggleMenu> = (props: IToggleMenu): JSX.Element => (
    <div className="cPanel">
        {
            props.isShowMenu
                ? <HamburgerMenu />
                : null
        }
        <Header />
    </div>
);

export default App;

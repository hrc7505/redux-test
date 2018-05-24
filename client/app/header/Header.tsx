import * as React from "react";

import { IToggleMenu } from "./top-bar/duck/State";
import TopBarContainer from "./top-bar/TopBarContainer";

import "./headerStyle.scss";

const Header: React.SFC<IToggleMenu> = (props: IToggleMenu): JSX.Element => (
    <header className={`header pullLeft ${!props.isLeftMenuVisible ? "cPanel" : ""}`}>
        <TopBarContainer />
    </header>
);

export default Header;

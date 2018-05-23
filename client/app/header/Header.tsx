import * as React from "react";

import TopBarContainer from "./top-bar/duck/TopBarContainer";

import "./headerStyle.scss";

const Header: React.SFC<object> = (): JSX.Element => (
    <header className="header pullLeft">
        <TopBarContainer />
    </header>
);

export default Header;

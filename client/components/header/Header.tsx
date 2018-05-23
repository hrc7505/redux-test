import * as React from "react";

import { ConnectedTopBar } from "./top-bar/Container";

const Header: React.SFC<object> = (): JSX.Element => (
    <header>
        <ConnectedTopBar />
    </header>
);

export default Header;

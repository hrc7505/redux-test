import * as React from "react";

import BreadcrumbHostContainer from "./breadcrumbHost/breadcrumbHostContainer";
import CommandBarHostContainer from "./commandBarHost/commandBarHostContainer";
import EntityTitleContainer from "./entityTitle/entityTitleContainer";

import "./headerStyle.scss";

const HeaderComponent: React.SFC<object> = (): JSX.Element => (
    <React.Fragment>
        <BreadcrumbHostContainer />
        <EntityTitleContainer />
        <CommandBarHostContainer />
    </React.Fragment>
);

export default HeaderComponent;

import * as React from "react";

import BreadcrumbHostContainer from "content/sites/common/header/breadcrumbHost/breadcrumbHostContainer";
import CommandBarHostContainer from "content/sites/common/header/commandBarHost/commandBarHostContainer";
import EntityTitleContainer from "content/sites/common/header/entityTitle/entityTitleContainer";

const HeaderComponent: React.SFC<object> = (): JSX.Element => (
    <React.Fragment>
        <BreadcrumbHostContainer />
        <EntityTitleContainer />
        <CommandBarHostContainer />
    </React.Fragment>
);

export default HeaderComponent;

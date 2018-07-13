import * as React from "react";

import BreadcrumbHostContainer from "content/sites/common/header/breadcrumbHost/breadcrumbHostContainer";
import CommandBarHostContainer from "content/sites/common/header/commandBarHost/commandBarHostContainer";
import EntityTitleContainer from "content/sites/common/header/entityTitle/entityTitleContainer";
import IHeaderProps from "content/sites/common/header/interfaces/IHeaderProps";

const HeaderComponent: React.SFC<IHeaderProps> = (props: IHeaderProps): JSX.Element => (
    <React.Fragment>
        <BreadcrumbHostContainer />
        <EntityTitleContainer />
        <CommandBarHostContainer {...props}/>
    </React.Fragment>
);

export default HeaderComponent;

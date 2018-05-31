import * as React from "react";

import BreadcrumbsComponent from "./breadcrumbs/BreadcrumbsComponent";
import CommandBarContainer from "./command-bar/CommandbarContainer";
import IHeaderComponentProps from "./models/IHeaderComponentProps";

const HeaderComponent: React.SFC<IHeaderComponentProps> = (props: IHeaderComponentProps): JSX.Element => (
    <div className="cPanel">
        <BreadcrumbsComponent items={props.breadcrumb.items} />
        <div className="contentContainer entityTitle">
            {props.title}
        </div>
        <CommandBarContainer {...props.commands} />
    </div>
);

export default HeaderComponent;

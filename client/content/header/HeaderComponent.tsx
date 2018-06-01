import * as React from "react";

import BreadcrumbComponent from "./breadcrumb/BreadcrumbComponent";
import CommandBarContainer from "./command-bar/CommandbarContainer";
import IHeaderComponentProps from "./interfaces/IHeaderComponentProps";

const HeaderComponent: React.SFC<IHeaderComponentProps> = (props: IHeaderComponentProps): JSX.Element => (
    <div className="cPanel">
        <BreadcrumbComponent items={props.breadcrumb.items} />
        <div className="contentContainer entityTitle">
            {props.title}
        </div>
        <CommandBarContainer {...props.commands} />
    </div>
);

export default HeaderComponent;

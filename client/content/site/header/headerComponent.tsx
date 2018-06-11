import * as React from "react";

import BreadcrumbComponent from "./breadcrumb/BreadcrumbComponent";
import CommandBarContainer from "./command-bar/CommandbarContainer";
import IHeaderComponentProps from "./interfaces/IHeaderComponentProps";

import "./headerComponentStyle.scss";

const HeaderComponent: React.SFC<IHeaderComponentProps> = (props: IHeaderComponentProps): JSX.Element => (
    <div className="cPanel">
        {
            props.breadcrumb
                ? <BreadcrumbComponent items={props.breadcrumb.items} />
                : null
        }
        <div className="cPanel entityTitle">
            {props.title}
        </div>
        {
            props.commands ?
                <CommandBarContainer {...props.commands} />
                : null
        }
    </div>
);

export default HeaderComponent;

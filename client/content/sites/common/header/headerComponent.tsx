import * as React from "react";

import BreadcrumbHostComponent from "./breadcrumbHost/breadcrumbHostComponent";
import CommandBarHostContainer from "./commandBarHost/commandBarHostContainer";
import IHeaderComponentProps from "./interfaces/IHeaderComponentProps";

import "./headerStyle.scss";

const HeaderComponent: React.SFC<IHeaderComponentProps> = (props: IHeaderComponentProps): JSX.Element => (
    <div className="cPanel">
        {
            props.breadcrumb
                ? <BreadcrumbHostComponent items={props.breadcrumb.items} />
                : null
        }
        <div className="cPanel entityTitle">
            {props.title}
        </div>
        {
            props.commands ?
                <CommandBarHostContainer {...props.commands} />
                : null
        }
    </div>
);

export default HeaderComponent;

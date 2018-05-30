import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import BreadcrumbsComponent from "./breadcrumbs/BreadcrumbsComponent";
import CommandBarContainer from "./command-bar/CommandbarContainer";

const HeaderComponent: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <BreadcrumbsComponent items={breadcrumbsProps.items} />
        <div className="contentContainer entityTitle">
            Parkland Refinary Burnaby
        </div>
        <CommandBarContainer />
    </div>
);

export default HeaderComponent;

const breadcrumbsProps: IBreadcrumbProps = {
    items: [
        { text: "Sites", key: "sites", href: "/sites" },
        { text: "Parkland Refinary Burnaby", key: "l1", isCurrentItem: true }
    ]
};

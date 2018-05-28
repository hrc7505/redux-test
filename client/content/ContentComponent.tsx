import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import * as React from "react";

import BreadcrumbsComponent from "./breadcrumbs/BreadcrumbsComponent";
import CommandBarContainer from "./command-bar/CommandbarContainer";
import Dashboard from "./dashboard/Dashboard";
import IAppState from "../duck/State";

import "./ContentComponentStyle.scss";

const ContentComponent: React.SFC<IAppState> = (props: IAppState): JSX.Element => (
    <section className={`contentComponent pullLeft ${!props.isLeftMenuVisible ? "cPanel" : ""}`}>
        <BreadcrumbsComponent items={breadcrumbsProps.items} />
        <div className="contentContainer entityTitle">
            Parkland Refinary Burnaby
        </div>

        <CommandBarContainer />
        <Dashboard />
    </section>
);

export default ContentComponent;

const breadcrumbsProps: IBreadcrumbProps = {
    items: [
        { text: "Sites", key: "sites", href: "/sites" },
        { text: "Parkland Refinary Burnaby", key: "l1", isCurrentItem: true }
    ]
};

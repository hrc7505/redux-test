import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";

import BreadcrumbsComponent from "./breadcrumbs/BreadcrumbsComponent";
import CommandbarComponent from "./command-bar/CommandbarComponent";
import { IToggleMenu } from "../../duck/State";
import TopBarContainer from "./top-bar/TopBarContainer";

import "./headerStyle.scss";

const Header: React.SFC<IToggleMenu> = (props: IToggleMenu): JSX.Element => (
    <header className={`header pullLeft ${!props.isLeftMenuVisible ? "cPanel" : ""}`}>
        <TopBarContainer />
        <BreadcrumbsComponent items={breadcrumbsProps.items}/>
        <div className="contentContainer entityTitle">
            Parkland Refinary Burnaby
        </div>

        <CommandbarComponent {...commandbarProps} />
    </header>
);

export default Header;

const commandbarProps: ICommandBarProps = {
    farItems: [
        {
            iconProps: {
                iconName: "Info",
                iconType: IconType.default
            },
            key: "information",
        }
    ],
    items: [
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "asset",
            name: "Asset",
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "job",
            name: "Job",
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "files",
            name: "Files",
        },
        {
            iconProps: {
                iconName: "CirclePlus",
                iconType: IconType.default
            },
            key: "permissions",
            name: "Permissions"
        }
    ],
    overflowItems: [],
};

const breadcrumbsProps: IBreadcrumbProps = {
    items: [
        { text: "Sites", key: "sites", href: "/sites" },
        { text: "Parkland Refinary Burnaby", key: "l1", isCurrentItem: true }
    ]
};

import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IInfoTileProps from "../common/infoTile/interfaces/IInfoTileProps";
import InfoTileComponent from "../common/infoTile/infoTileComponent";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/rightPanel/interfaces/IToggleRightPanelPayload";
import JobSummaryListComponent from "../../common/jobSummaryList/jobSummaryListComponent";

import "./siteDetailsStyle.scss";

class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    private breadCrumbPayload: IBreadcrumbPayload;
    private entityTitlePayload: IEnityTitlePayload;

    public render(): JSX.Element {
        const { rightPaneProps } = this.props;

        return (
            <div className="cPanel">
                <JobSummaryListComponent
                    jobSummaryData={this.props.site ? this.props.site.jobList : null}
                    tileOnClick={this.props.jobTileOnClick}
                    selectedId={
                        rightPaneProps.rightPaneContent && rightPaneProps.rightPaneContent.key
                            ? rightPaneProps.rightPaneContent.key.toString()
                            : null}
                />
                <div className="bodyContentTitle cPanel">Site Management </div>
                {
                    infoTileList.map((data: IInfoTileProps, i: number) => (
                        <InfoTileComponent key={i} {...data} />
                    ))
                }
            </div>
        );
    }

    public componentDidMount(): void {
        this.breadCrumbPayload = breadcrumbPayload;
        this.entityTitlePayload = entityTitlePayload;
        this.props.setCommands(commandsPayload);
        this.getSiteDetails();
        window.addEventListener("hashchange", this.getSiteDetails);
    }

    public componentWillReceiveProps(nextProps: ISiteDetailsProps): void {
        if (nextProps.site !== this.props.site) {
            this.breadCrumbPayload = {
                breadcrumb: {
                    items: [
                        { text: "Sites", key: "sites" },
                        { text: nextProps.site.name, key: "/sites/" + nextProps.site.id, isCurrentItem: true }
                    ]
                }
            };

            this.entityTitlePayload = {
                title: nextProps.site.name
            };

            this.props.setBreadcrumb(this.breadCrumbPayload);
            this.props.setEntityTitle(this.entityTitlePayload);
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener("hashchange", this.getSiteDetails);
    }

    private getSiteDetails = (): void => {
        if (this.props.rightPaneProps.isRightPaneVisible) {
            this.props.closeRightPane();
        }

        this.props.getSiteDetails(this.props.match.params.individualSite);
    }
}

export default SiteDetailsComponent;

const Test1: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <TextField label="Site Name:*" placeholder="Site Name" errorMessage="Site Name is mandatory" />
        {
            // tslint:disable-next-line:no-magic-numbers
            <TextField multiline rows={4} label="Site Description:" placeholder="Description here..." />
        }
        <TextField label="Phone Number:" placeholder="+1 123456789" />
        <TextField label="Street:*" placeholder="Street" />
        <TextField label="City:*" placeholder="City" />
        <TextField label="Postal Code:*" placeholder="Postal Code" />
        <Dropdown
            placeHolder="Select a City"
            label="Country:*"
            options={
                [
                    { key: "A", text: "Newyork" },
                    { key: "B", text: "Delhi" },
                    { key: "C", text: "Shangai" },
                    { key: "D", text: "Surray" },
                    { key: "E", text: "London" }
                ]
            }
        />
        <Dropdown
            placeHolder="Select a Province/State"
            label="Province/State:*"
            options={
                [
                    { key: "A", text: "State1" },
                    { key: "B", text: "State2" },
                    { key: "C", text: "State3" },
                    { key: "D", text: "State4" },
                    { key: "E", text: "State5" }
                ]
            }
        />
    </div>
);

const rightPaneData: ISitesToggleRightPanePayload = {
    rightPaneHeaderText: "HeaderText of the right pane",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IToggleRightPanelPayload = {
    rightPanelHeaderText: "Add New Site",
    rightPanelContent: <Test1 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

const breadcrumbPayload: IBreadcrumbPayload = {
    breadcrumb: null,
};

const entityTitlePayload: IEnityTitlePayload = {
    title: null,
};

const commandsPayload: ICommandsPayload = {
    commands: {
        farItems: [
            {
                iconProps: {
                    iconName: "Info",
                    iconType: IconType.default
                },
                key: "information",
                rightPaneData,
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
                rightPanelData
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
                name: "Permissions",
            },
        ],
        overflowItems: [],
    }
};

const infoTileList: IInfoTileProps[] = [
    {
        infoTileIcon: "icon",
        infoTileTitle: "Assets",
        infoTileDetailsList: [
            {
                field: "unit",
                value: 14
            },
            {
                field: "piping",
                value: 10
            }
        ]
    },
    {
        infoTileIcon: "icon",
        infoTileTitle: "jobs",
        infoTileDetailsList: [
            {
                field: "active",
                value: 143
            },
            {
                field: "completed",
                value: 104
            },
            {
                field: "archived",
                value: 150
            }
        ]
    },
    {
        infoTileIcon: "icon",
        infoTileTitle: "permissions",
        infoTileDetailsList: [
            {
                field: "member",
                value: 5
            },
        ]
    }
];

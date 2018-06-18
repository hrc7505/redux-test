import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";

import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import IInfoTileProps from "../common/infoTile/interfaces/IInfoTileProps";
import IJobSummaryTileProps from "../../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import InfoTileComponent from "../common/infoTile/infoTileComponent";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/rightPanel/interfaces/IToggleRightPanelPayload";
import JobSummaryTile from "../../common/jobSummaryTile/jobSummaryTileComponent";
import Test1 from "../../rightPanelBodyComponents/test1";

import "./siteDetailsStyle.scss";

class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    private headerPayload: IHeaderPayload;

    public render(): JSX.Element {
        const { rightPaneProps } = this.props;

        return (
            <div className="cPanel">
                <div className="activeJobs cPanel">
                    {
                        this.props.site && this.props.site.jobList
                            ? this.props.site.jobList.map((props: IJobSummaryTileProps): JSX.Element => {
                                props.tileOnClick = this.props.jobTileOnClick;
                                props.isSelected = (
                                    rightPaneProps.rightPaneContent.key === props.jobId &&
                                    rightPaneProps.isRightPaneVisible
                                );

                                return <JobSummaryTile key={props.jobId} {...props} />;
                            })
                            : null
                    }
                </div>
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
        this.headerPayload = headerActionPayload;
        this.getSiteDetails();
        window.addEventListener("hashchange", this.getSiteDetails);
    }

    public componentWillReceiveProps(nextProps: ISiteDetailsProps): void {
        if (nextProps.site !== this.props.site) {
            this.headerPayload = {
                ...this.headerPayload,
                title: nextProps.site.siteName,
                breadcrumb: {
                    ...this.headerPayload.breadcrumb,
                    items: [
                        { text: "Sites", key: "sites" },
                        { text: nextProps.site.siteName, key: "individualSite", isCurrentItem: true }
                    ]
                }
            };
            this.setHeader();
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener("hashchange", this.getSiteDetails);
    }

    private setHeader(): void {
        this.props.setHeaderData(this.headerPayload);
    }

    private getSiteDetails = (): void => {
        this.props.closeRightPane();
        this.props.getSiteDetails(this.props.match.params.individualSite);
    }
}

export default SiteDetailsComponent;

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

const headerActionPayload: IHeaderPayload = {
    title: "Individual Site Name",
    breadcrumb: {
        items: [
            { text: "Sites", key: "sites" },
            { text: "Individual Site Name", key: "individualSite", isCurrentItem: true }
        ]
    },
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

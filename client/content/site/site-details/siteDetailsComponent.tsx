import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";

import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import IInfoTileProps from "../common/info-tile/interfaces/IInfoTileProps";
import IJobSummaryTileProps from "../../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import InfoTile from "../common/info-tile/InfoTile";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";
import JobSummaryTile from "../../common/jobSummaryTile/jobSummaryTileComponent";
import Test1 from "../../right-panel-body-components/test1";

import "./siteDetailsStyle.scss";

class IndividualSiteComponent extends React.PureComponent<ISiteDetailsProps> {
    public render(): JSX.Element {

        // These are placeholders for real data which should be coming from the server.
        // Setting this up so that we are ready when we have the ability to make a server call.
        const tileProps: IJobSummaryTileProps[] = [
            {
                jobTitle: "foo",
                jobId: "456",
                jobSite: "My house",
                jobCreatedDate: "01/01/2000",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: false
            },
            {
                jobTitle: "bar",
                jobId: "123",
                jobSite: "My office",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: false
            },
            {
                jobTitle: "baz",
                jobId: "888",
                jobSite: "My mansion",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: false
            }
        ];

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

        return (
            <div className="cPanel">
                <div className="activeJobs cPanel">
                    {
                        tileProps.map((props: IJobSummaryTileProps): JSX.Element => (
                            <JobSummaryTile key={props.jobId} {...props} />
                        ))
                    }
                </div>
                <div className="bodyContentTitle cPanel">Site Management </div>
                {
                    infoTileList.map((data: IInfoTileProps, i: number) => (
                        <InfoTile key={i} {...data} />
                    ))
                }
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.setHeaderData(headerActionPayload);
    }
}

export default IndividualSiteComponent;

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

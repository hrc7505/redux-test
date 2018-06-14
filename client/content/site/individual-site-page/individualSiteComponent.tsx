import * as React from "react";

import HeaderComponent from "../common/header/headerComponent";
import IIndividualSiteProps from "./interfaces/IIndividualSiteProps";
import IJobSummaryTileProps from "../../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import JobSummaryTile from "../../common/jobSummaryTile/jobSummaryTileComponent";
import RightPaneComponent from "../../common/rightPane/rightPaneComponent";

import "./IndividualSiteStyle.scss";
import InfoTile from "../common/info-tile/InfoTile";
import IInfoTileProps from "../common/info-tile/interfaces/IInfoTileProps";

class IndividualSiteComponent extends React.PureComponent<IIndividualSiteProps> {
    public render(): JSX.Element {
        const { headerData, rightPaneProps } = this.props;

        // These are placeholders for real data which should be coming from the server.
        // Setting this up so that we are ready when we have the ability to make a server call.
        const tileProps: IJobSummaryTileProps[] = [
            {
                jobTitle: "foo",
                jobId: "456",
                jobSite: "My house",
                jobCreatedDate: "01/01/2000",
                jobStatus: "Active",
                tileOnClick: this.nullFunction,
                isSelected: false
            },
            {
                jobTitle: "bar",
                jobId: "123",
                jobSite: "My office",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: this.nullFunction,
                isSelected: false
            },
            {
                jobTitle: "baz",
                jobId: "888",
                jobSite: "My mansion",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: this.nullFunction,
                isSelected: false
            }
        ];

        const infoTileList: IInfoTileProps[] = [
            {
                infoTileIcon: "icon",
                infoTileTitle: "Assets",
                infoTleCounterList: [
                    {
                        counterName: "unit",
                        counterValue: 14
                    },
                    {
                        counterName: "piping",
                        counterValue: 10
                    }
                ]
            },
            {
                infoTileIcon: "icon",
                infoTileTitle: "jobs",
                infoTleCounterList: [
                    {
                        counterName: "active",
                        counterValue: 143
                    },
                    {
                        counterName: "completed",
                        counterValue: 104
                    },
                    {
                        counterName: "archived",
                        counterValue: 150
                    }
                ]
            },
            {
                infoTileIcon: "icon",
                infoTileTitle: "permissions",
                infoTleCounterList: [
                    {
                        counterName: "member",
                        counterValue: 5
                    },
                ]
            }
        ];

        return (
            <div className="cPanel siteComponent">
                <HeaderComponent {...headerData} />
                <div className="bodyRightPanelContainer cPanel">
                    <div className={`bodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                        <div className="bodyContentTitle cPanel">Active jobs </div>
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
                    <RightPaneComponent {...rightPaneProps} />
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getPageData();
    }

    private nullFunction: () => null = (): null => null;
}

export default IndividualSiteComponent;

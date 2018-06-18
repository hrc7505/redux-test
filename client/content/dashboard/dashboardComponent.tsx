import * as React from "react";

import DetailsListHostComponent from "../../content/sites/common/detailListHost/detailListHostComponent";
import IDashboardProps from "./interfaces/IDashboardProps";
import IJobSummaryTileProps from "../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import IRightPaneProps from "../common/rightPane/interfaces/IRightPaneProps";
import JobSummaryTile from "../common/jobSummaryTile/jobSummaryTileComponent";
import RightPaneComponent from "../common/rightPane/rightPaneComponent";
import sites, { columns } from "../sites/common/detailListHost/testData";

import "./dashboardStyle.scss";

export default class DashboardComponent extends React.PureComponent<IDashboardProps> {
    public render(): JSX.Element {
        const rightPaneProps: IRightPaneProps = this.props.rightPaneProps;

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
                isSelected: (rightPaneProps.rightPaneContent.key === "456") && rightPaneProps.isRightPaneVisible
            },
            {
                jobTitle: "bar",
                jobId: "123",
                jobSite: "My office",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: rightPaneProps.rightPaneContent.key === "123" && rightPaneProps.isRightPaneVisible
            },
            {
                jobTitle: "baz",
                jobId: "888",
                jobSite: "My mansion",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: rightPaneProps.rightPaneContent.key === "888" && rightPaneProps.isRightPaneVisible
            }
        ];

        return (
            <div className="cPanel dashboardComponent">
                <div className={`dashboardBodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                    <div className="cPanel">
                        <div className="cPanel sectionTitle">active jobs</div>
                        <div className="activeJobs cPanel">
                            {
                                tileProps.map((props: IJobSummaryTileProps): JSX.Element => (
                                    <JobSummaryTile key={props.jobId} {...props} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="cPanel sectionTitle">sites</div>
                    <DetailsListHostComponent
                        columns={columns}
                        isCompactMode={true}
                        items={sites}
                    />
                </div>
                <RightPaneComponent {...rightPaneProps} />
            </div>
        );
    }
}

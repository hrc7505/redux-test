import * as React from "react";

import DetailsListComponent from "../../common/detail-list/DetailListComponent";
import IDashboardProps from "./interfaces/IDashboardProps"
import IJobSummaryTileProps from "../common/jobSummaryTile/interfaces/IJobSummaryTileProps";
import JobSummaryTile from "../common/jobSummaryTile/jobSummaryTileComponent";
import RightPaneComponent from "../right-pane/RightPaneComponent";

import "./dashboardStyle.scss";

export default class DashboardComponent extends React.Component<IDashboardProps> {
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
                isSelected: (this.props.rightPaneData.key === "456") && this.props.isRightPaneVisible
            },
            {
                jobTitle: "bar",
                jobId: "123",
                jobSite: "My office",
                jobCreatedDate: "11/19/1999",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: this.props.rightPaneData.key === "123" && this.props.isRightPaneVisible
            },
            {
                jobTitle: "baz",
                jobId: "888",
                jobSite: "My mansion",
                jobCreatedDate: "09/01/2018",
                jobStatus: "Active",
                tileOnClick: this.props.jobTileOnClick,
                isSelected: this.props.rightPaneData.key === "888" && this.props.isRightPaneVisible
            }
        ];

        return (
            <div className="cPanel dashboardComponent">
                <div className={`dashboardBodyContainer pullLeft ${this.props.isRightPaneVisible ? "shrink" : ""}`}>
                    <div className="cPanel">
                        <div className="activeJobs cPanel">
                            {tileProps.map((props:IJobSummaryTileProps): JSX.Element => {
                                return(<JobSummaryTile key={props.jobId} {...props} />);
                            })}
                        </div>
                    </div>
                    <DetailsListComponent/>
                </div>
                <RightPaneComponent
                    isRightPaneVisible={this.props.isRightPaneVisible}
                    rightPaneData={this.props.rightPaneData}
                />
            </div>
        );
    }
}

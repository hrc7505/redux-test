import * as React from "react";

import JobSummaryTileComponent from "../jobSummaryTile/jobSummaryTileComponent";
import IJobSummaryListProps from "./interfaces/IJobSummaryListProps";
import IJobTileData from "../../dashboard/interfaces/IJobTileData";


export default class JobSummaryListComponent extends React.PureComponent<IJobSummaryListProps> {
    public render() {
        return (
            <div className="activeJobs cPanel">
                {
                    this.props.jobSummaryData.map((data: IJobTileData): JSX.Element => (
                        <JobSummaryTileComponent
                            key={data.id}
                            jobTitle={data.title}
                            jobId={data.id}
                            jobCreatedDate={data.createDate}
                            jobSite={data.site}
                            jobStatus={data.status}
                            tileOnClick={this.props.tileOnClick}
                            isSelected={this.props.selectedId === data.id ? true: false}
                        />
                    ))
                }
            </div>
        );
    }
}

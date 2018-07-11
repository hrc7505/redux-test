import * as React from "react";

import IJobSummaryListProps from "content/common/jobSummaryList/interfaces/IJobSummaryListProps";
import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import JobSummaryTileComponent from "content/common/jobSummaryTile/jobSummaryTileComponent";

export default class JobSummaryListComponent extends React.PureComponent<IJobSummaryListProps> {
    public render(): JSX.Element {
        return (
            <div className="activeJobs cPanel">
                {
                    (this.props.jobSummaryData && this.props.jobSummaryData.length !== 0)
                        ? this.props.jobSummaryData.map((data: IJobTileData): JSX.Element => (
                            <JobSummaryTileComponent
                                key={data.id}
                                title={data.title}
                                id={data.id}
                                number={data.number}
                                createDate={data.createDate}
                                siteId={data.siteId}
                                siteName={data.siteName}
                                status={data.status}
                                tileOnClick={this.props.tileOnClick}
                            />
                        ))
                        : <div> Insert nice message about how there isn't any jobs that are active / to display. </div>
                }
            </div>
        );
    }
}

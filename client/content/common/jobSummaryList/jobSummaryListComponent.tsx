import * as React from "react";

import IJobSummaryListProps from "./interfaces/IJobSummaryListProps";
import IJobTileData from "../../common/jobSummaryList/interfaces/IJobTileData";
import JobSummaryTileComponent from "../jobSummaryTile/jobSummaryTileComponent";

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
                                createDate={data.createDate}
                                site={data.site}
                                status={data.status}
                                tileOnClick={this.props.tileOnClick}
                                isSelected={this.props.selectedId === data.id ? true : false}
                            />
                        ))
                        : <div> Insert nice message about how there isn't any jobs that are active / to display. </div>
                }
            </div>
        );
    }
}

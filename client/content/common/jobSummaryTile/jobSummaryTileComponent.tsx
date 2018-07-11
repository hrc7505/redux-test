import * as moment from "moment";
import * as React from "react";

import IJobSummaryTileProps from "content/common/jobSummaryTile/interfaces/IJobSummaryTileProps";

import "content/common/jobSummaryTile/jobSummaryTileStyle.scss";

export default class JobSummaryTileComponent extends React.PureComponent<IJobSummaryTileProps> {
    public render(): JSX.Element {
        return (
            <div
                className={`job pullLeft`}
                onClick={
                    (): void => this.props.tileOnClick(`/sites/${this.props.siteId}/jobs/${this.props.id}`)
                }
            >
                <div className="cPanel jobTitle">{this.props.title}</div>
                <div className="cPanel jobInfoContainer">
                    {this.summaryTileInfoRender("date created", moment(this.props.createDate).format("MMMM D, YYYY"))}
                    {this.summaryTileInfoRender("status", this.props.status)}
                    {this.summaryTileInfoRender("job id", this.props.number)}
                </div>
                <div className="cPanel siteName">{this.props.siteName}</div>
            </div>
        );
    }

    private summaryTileInfoRender = (label: string, value: string): JSX.Element => (
        <div className="cPanel jobInfo">
            <span className="infoLabel">{label}: </span>
            <span className="infoValue">{value}</span>
        </div>
    )
}

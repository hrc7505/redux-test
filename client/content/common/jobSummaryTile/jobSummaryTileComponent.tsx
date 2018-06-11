import * as React from "react";

import IJobSummaryTileProps from "./interfaces/IJobSummaryTileProps";
import IRightPaneSummaryProps from "./rightPaneSummary/interfaces/IRightPaneSummaryProps";
import RightPaneSummary from "./rightPaneSummary/rightPaneSummary";

import "./jobSummaryTileStyle.scss";

export default class JobSummaryTileComponent extends React.Component<IJobSummaryTileProps> {
    public render(): JSX.Element {
        const rightPaneSummaryProps: IRightPaneSummaryProps = {
            jobTitle: this.props.jobTitle,
            jobId: this.props.jobId,
            jobCreatedDate: this.props.jobCreatedDate,
            jobStatus: this.props.jobStatus,
            jobSite: this.props.jobSite
        };

        return (
            <div
                className={`job pullLeft ${this.props.isSelected ? "selected" : ""}`}
                onClick={
                    (): void => this.props.tileOnClick(
                        <RightPaneSummary key={this.props.jobId} {...rightPaneSummaryProps} />
                    )
                }
            >
                <div className="cPanel jobTitle">{this.props.jobTitle}</div>
                <div className="cPanel jobInfoContainer">
                    {this.summaryTileInfoRender("date created", this.props.jobCreatedDate)}
                    {this.summaryTileInfoRender("status", this.props.jobStatus)}
                    {this.summaryTileInfoRender("job id", this.props.jobId)}
                </div>
                <div className="cPanel siteName">{this.props.jobSite}</div>
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

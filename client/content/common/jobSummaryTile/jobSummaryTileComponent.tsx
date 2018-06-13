import * as React from "react";

import IJobSummaryTileProps from "./interfaces/IJobSummaryTileProps";

import "./jobSummaryTileStyle.scss";

export default class JobSummaryTileComponent extends React.Component<IJobSummaryTileProps> {
    public render(): JSX.Element {
        return (
            <div
                className={`job pullLeft ${this.props.isSelected ? "selected" : ""}`}
                onClick={
                    (): void => this.props.tileOnClick({
                        rightPaneHeaderText: `${this.props.jobTitle} (${this.props.jobId})`,
                        rightPaneContent: this.content(
                            this.props.jobId, // Body div's key.
                            this.props.jobCreatedDate,
                            this.props.jobStatus,
                            this.props.jobSite),
                        rightPaneFooterRender: this.rightPaneFootRender
                    })
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

    private content = (key: string, date: string, status: string, site: string): JSX.Element => (
        <div key={key}>
            <div> The job's created date is {date} </div>
            <div> This job is currently {status} at {site} </div>
        </div>
    )

    private rightPaneFootRender = (): JSX.Element => (
        <div> This is a footer. </div>
    )

    private summaryTileInfoRender = (label: string, value: string): JSX.Element => (
        <div className="cPanel jobInfo">
            <span className="infoLabel">{label}: </span>
            <span className="infoValue">{value}</span>
        </div>
    )
}

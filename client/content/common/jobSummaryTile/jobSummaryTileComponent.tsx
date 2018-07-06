import * as React from "react";

import IJobSummaryTileProps from "./interfaces/IJobSummaryTileProps";

import "./jobSummaryTileStyle.scss";

export default class JobSummaryTileComponent extends React.PureComponent<IJobSummaryTileProps> {
    public render(): JSX.Element {
        return (
            <div
                className={`job pullLeft ${this.props.isSelected ? "selected" : ""}`}
                onClick={
                    (): void => this.props.tileOnClick({
                        rightPaneId: `${this.props.id}`,
                        rightPaneHeaderText: `${this.props.title} (${this.props.id})`,
                        rightPaneContent: this.content(
                            this.props.createDate,
                            this.props.status,
                            this.props.site),
                        rightPaneFooterRender: this.rightPaneFootRender
                    })
                }
            >
                <div className="cPanel jobTitle">{this.props.title}</div>
                <div className="cPanel jobInfoContainer">
                    {this.summaryTileInfoRender("date created", this.props.createDate)}
                    {this.summaryTileInfoRender("status", this.props.status)}
                    {this.summaryTileInfoRender("job id", this.props.id)}
                </div>
                <div className="cPanel siteName">{this.props.site}</div>
            </div>
        );
    }

    private content = (date: string, status: string, site: string): JSX.Element => (
        <div>
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

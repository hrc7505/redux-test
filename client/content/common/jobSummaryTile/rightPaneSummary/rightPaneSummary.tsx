import * as React from "react";

import IRightPaneSummaryProps from "./interfaces/IRightPaneSummaryProps";

const rightPaneSummaryProps: React.SFC<IRightPaneSummaryProps> = (props: IRightPaneSummaryProps): JSX.Element => (
    <div>
        <div> {props.jobTitle} ({props.jobId}) </div>
        <div> The job's created date is {props.jobCreatedDate} </div>
        <div> This job is currently {props.jobStatus} at {props.jobSite} </div>
    </div>
);

export default rightPaneSummaryProps;

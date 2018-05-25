import * as React from "react";

import "./JobComponentStyle.scss";

const JobComponent: React.SFC<object> = (): JSX.Element => (
    <div className="job pullLeft">
        <div className="cPanel jobTitle">steam plant maintenance 2018</div>
        <div className="cPanel jobShortInfoContainer">
            <JobShortInfo infoLabel="date created" infoValue="11/08/2018"/>
            <JobShortInfo infoLabel="status" infoValue="active"/>
            <JobShortInfo infoLabel="job id" infoValue="1j-132345"/>
        </div>
        <div className="cPanel siteName">parkland refinery - burnaby</div>
    </div>
);

export default JobComponent;

interface IJobShortInfoProps {
    infoLabel: string;
    infoValue: string;
}
const JobShortInfo: React.SFC<IJobShortInfoProps> = (props: IJobShortInfoProps): JSX.Element => (
    <div className="cPanel jobShortInfo">
        <span className="infoLabel">{props.infoLabel}: </span>
        <span className="infoValue">{props.infoValue}</span>
    </div>
);

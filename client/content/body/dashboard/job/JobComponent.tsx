import * as React from "react";

import JobShortInfo from "./JobShortInfo";

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

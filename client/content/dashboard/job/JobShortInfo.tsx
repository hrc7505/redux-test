import * as React from "react";

import IJobShortInfoProps from "./interfaces/IJobShortInfoProps";

import "./JobShortInfoStyle.scss";

const JobShortInfo: React.SFC<IJobShortInfoProps> = (props: IJobShortInfoProps): JSX.Element => (
    <div className="cPanel jobShortInfo">
        <span className="infoLabel">{props.infoLabel}: </span>
        <span className="infoValue">{props.infoValue}</span>
    </div>
);

export default JobShortInfo;

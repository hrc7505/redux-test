import * as React from "react";

import DetailsListComponent from "../../common/detail-list/DetailListComponent";
import JobComponent from "./JobComponent";

import "./dashboardStyle.scss";

const Dashboard: React.SFC<object> = (): JSX.Element => (
    <div className="dashboard pullLeft">
        <div className="cPanel">
            <div className="activeJobs cPanel">
                <JobComponent />
                <JobComponent />
                <JobComponent />
            </div>
        </div>

        <DetailsListComponent/>
    </div>
);

export default Dashboard;

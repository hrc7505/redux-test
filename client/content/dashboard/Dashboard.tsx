import * as React from "react";

import JobComponent from "./JobComponent";

import "./dashboardStyle.scss";
import DetailsListComponent from "../../common/detail-list/DetailListComponent";

const Dashboard: React.SFC<object> = (): JSX.Element => (
    <div className="dashboard containerFluid pullLeft">
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

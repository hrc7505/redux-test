import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import DashboardContainer from "./dashboard/dashboardContainer";
import SitesContainer from "./site/sitesContainer";

const routes: React.SFC<RouteComponentProps<string>> = (props: RouteComponentProps<string>): JSX.Element => (
    <Switch>
        <Route exact path={`${props.match.path}`} component={DashboardContainer} />
        <Route path={`${props.match.path !== "/" ? props.match.path : ""}/dashboard`} component={DashboardContainer} />
        <Route path={`${props.match.path !== "/" ? props.match.path : ""}/sites`} component={SitesContainer} />
    </Switch>
);

export default withRouter(routes);

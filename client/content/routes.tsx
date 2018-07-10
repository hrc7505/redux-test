import * as React from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router";

import PageNotFound from "common/pageNotFound/pageNotFound";
import DashboardContainer from "content/dashboard/dashboardContainer";
import SitesContainer from "content/sites/sitesContainer";

// This route list contains all routes to the standalone parts of the application.
// There is an explicit entry for the 404 page and a redirect to catch all other paths.
// Sub-routes within the standalone parts can render a redirect to the 404 page for their catch-all case.
const routes: React.SFC<RouteComponentProps<string>> = (props: RouteComponentProps<string>): JSX.Element => (
    <Switch>
        <Route exact path="/" component={DashboardContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/sites" component={SitesContainer} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
    </Switch>
);

export default withRouter(routes);

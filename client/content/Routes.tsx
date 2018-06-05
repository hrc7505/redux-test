import * as React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";

import Dashboard from "./body/dashboard/Dashboard";
import SiteContainer from "./body/site/siteContainer";

const Routes: React.SFC<RouteComponentProps<string>> = (props: RouteComponentProps<string>): JSX.Element => (
    <Switch>
        <Route exact path={`${props.match.path}`} component={Dashboard} />
        <Route path={`${props.match.path}/sites`} component={SiteContainer} />
    </Switch>
);

export default withRouter(Routes);

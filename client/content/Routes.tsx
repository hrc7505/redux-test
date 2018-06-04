import * as React from "react";
import { Route, Switch } from "react-router";

import Dashboard from "./body/dashboard/Dashboard";
import SiteContainer from "./body/site/siteContainer";

const Routes: React.SFC<object> = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sites" component={SiteContainer} />
    </Switch>
);

export default Routes;

import * as React from "react";
import { Route, Switch } from "react-router";

import Dashboard from "./body/dashboard/Dashboard";
import SiteComponent from "./body/site/SiteComponent";

const Rootes: React.SFC<object> = (): JSX.Element => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sites" component={SiteComponent} />
    </Switch>
);

export default Rootes;

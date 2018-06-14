import * as React from "react";
import { Route, RouteComponentProps, Switch, } from "react-router-dom";

import AllSitesContainer from "./all-sites-page/allSitesContainer";
import IndividualSiteContainer from "./individual-site-page/individualSiteContainer";

const SitesComponent: React.SFC<RouteComponentProps<string>> = (props: RouteComponentProps<string>): JSX.Element => (
    <Switch>
        <Route exact path="/sites" component={AllSitesContainer} />
        <Route path="/sites/:individualSite" component={IndividualSiteContainer} />
    </Switch>
);

export default SitesComponent;

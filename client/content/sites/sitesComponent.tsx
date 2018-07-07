import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import AllSitesContainer from "./allSites/allSitesContainer";
import HeaderComponent from "./common/header/headerComponent";
import ISitesProps from "./interfaces/ISitesProps";
import RightPaneComponent from "../common/rightPane/rightPaneComponent";
import SiteDetailsContainer from "./siteDetails/siteDetailsContainer";

import "./sitesStyle.scss";

const SitesComponent: React.SFC<ISitesProps> = (props: ISitesProps): JSX.Element => (
    <div className="cPanel sitesComponent">
        <HeaderComponent />
        <div className="bodyRightPanelContainer cPanel">
            <div className={`bodyContainer pullLeft
                ${props.rightPaneProps && props.rightPaneProps.isRightPaneVisible
                    ? "shrink"
                    : ""
                }`}>
                <Switch>
                    { /* Root route used for standalone scenario so it doesn't default to 404 in that case. */}
                    <Route exact path="/test/sites" component={AllSitesContainer} />
                    <Route exact path="/sites" component={AllSitesContainer} />
                    <Route exact path="/sites/:individualSite" component={SiteDetailsContainer} />
                    <Route exact path="/sites/:individualSite/jobs" component={AllSitesContainer} />
                    <Redirect to="/404" />
                </Switch>
            </div>
            <RightPaneComponent {...props.rightPaneProps} />
        </div>
    </div>
);

export default SitesComponent;

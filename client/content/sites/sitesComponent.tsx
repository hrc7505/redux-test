import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import RightPaneComponent from "content/common/rightPane/rightPaneComponent";
import AllSitesContainer from "content/sites/allSites/allSitesContainer";
import HeaderContainer from "content/sites/common/header/headerContainer";
import ISitesProps from "content/sites/interfaces/ISitesProps";
import SiteDetailsContainer from "content/sites/siteDetails/siteDetailsContainer";

import "content/sites/sitesStyle.scss";

const SitesComponent: React.SFC<ISitesProps> = (props: ISitesProps): JSX.Element => (
    <div className="cPanel sitesComponent">
        <HeaderContainer />
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
                    <Route exact path="/sites/:SiteId" component={SiteDetailsContainer} />

                    { /* These components have not been created. Using AllSiteContainer as a placeholder. */}
                    <Route exact path="/sites/:SiteId/permissions" component={AllSitesContainer} />
                    <Route exact path="/sites/:SiteId/jobs" component={AllSitesContainer} />
                    <Route exact path="/sites/:SiteId/jobs/:JobId" component={AllSitesContainer} />

                    <Redirect to="/404" />
                </Switch>
            </div>
            <RightPaneComponent {...props.rightPaneProps} />
        </div>
    </div>
);

export default SitesComponent;

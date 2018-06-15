import * as React from "react";
import { Route } from "react-router-dom";

import AllSitesContainer from "./all-sites/allSitesContainer";
import HeaderComponent from "./common/header/headerComponent";
import ISitesProps from "./interfaces/ISitesProps";
import RightPaneComponent from "../common/rightPane/rightPaneComponent";
import SiteDetailsContainer from "./site-details/siteDetailsContainer";

const SitesComponent: React.SFC<ISitesProps> = (props: ISitesProps): JSX.Element => (
    <div className="cPanel siteComponent">
        <HeaderComponent {...props.headerData} />
        <div className="bodyRightPanelContainer cPanel">
            <div className={`bodyContainer pullLeft
                ${props.rightPaneProps && props.rightPaneProps.isRightPaneVisible
                    ? "shrink"
                    : ""
                }`}>
                <Route exact path="/sites" component={AllSitesContainer} />
                <Route path="/sites/:individualSite" component={SiteDetailsContainer} />
            </div>
            <RightPaneComponent {...props.rightPaneProps} />
        </div>
    </div>
);

export default SitesComponent;

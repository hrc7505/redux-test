import * as React from "react";

import DetailsListComponent from "../../../common/detail-list/DetailListComponent";
import HeaderContainer from "./header/headerContainer";
import ISiteComponentProps from "./interfaces/iSiteComponentProps";
import RightPaneContainer from "../../right-pane/rightPaneContainer";

import "./siteComponentStyle.scss";

const SiteComponent: React.SFC<ISiteComponentProps> = (props: ISiteComponentProps): JSX.Element => (
    <div className="cPanel siteComponent">
        <HeaderContainer />
        <div className="bodyRightPanelContainer cPanel">
            <div className={`bodyContainer pullLeft ${props.isRightPaneVisible ? "shrink" : ""}`}>
                <DetailsListComponent/>
            </div>
            <RightPaneContainer />
        </div>
    </div>
);

export default SiteComponent;

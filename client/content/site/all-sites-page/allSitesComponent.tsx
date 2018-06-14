import * as React from "react";
import { Link } from "react-router-dom";

import DetailsListComponent from "../../../common/detail-list/DetailListComponent";
import HeaderComponent from "../common/header/headerComponent";
import IAllSitesComponentProps from "./interfaces/IAllSitesComponentProps";
import RightPaneComponent from "../../common/rightPane/RightPaneComponent";

import "./sitesStyle.scss";

export default class AllSitesComponent extends React.PureComponent<IAllSitesComponentProps> {
    public render(): JSX.Element {
        const { headerData, rightPaneProps } = this.props;

        return (
            <div className="cPanel siteComponent">
            <Link to="/sites/individualSite">Go to site</Link>
                <HeaderComponent {...headerData} />
                <div className="bodyRightPanelContainer cPanel">
                    <div className={`bodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                        <DetailsListComponent />
                    </div>
                    <RightPaneComponent {...rightPaneProps} />
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getPageData();
    }
}

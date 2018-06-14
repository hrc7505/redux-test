import * as React from "react";

import DetailsListComponent from "../../common/detail-list/DetailListComponent";
import HeaderComponent from "./header/headerComponent";
import ISitesComponentProps from "./interfaces/ISitesComponentProps";
import RightPaneComponent from "../common/rightPane/RightPaneComponent";

import "./sitesStyle.scss";

export default class SitesComponent extends React.Component<ISitesComponentProps> {
    public render(): JSX.Element {
        const { headerData, rightPaneProps } = this.props;

        return (
            <div className="cPanel siteComponent">
                <HeaderComponent {...headerData} />
                <div className="bodyRightPanelContainer cPanel">
                    <div className={`bodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                        <DetailsListComponent />
                    </div>
                    <RightPaneComponent
                       {...rightPaneProps}
                    />
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getPageData();
    }
}

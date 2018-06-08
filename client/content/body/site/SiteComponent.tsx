import * as React from "react";

import DetailsListComponent from "../../../common/detail-list/DetailListComponent";
import HeaderComponent from "./header/headerComponent";
import ISiteState from "./interfaces/ISiteState";
import RightPaneContainer from "../../right-pane/rightPaneContainer";

import "./siteComponentStyle.scss";

export default class SiteComponent extends React.Component<ISiteState> {
    public render(): JSX.Element {
        const { isRightPaneVisible, headerData } = this.props;

        return (
            <div className="cPanel siteComponent">
                <HeaderComponent {...headerData} />
                <div className="bodyRightPanelContainer cPanel">
                    <div className={`bodyContainer pullLeft ${isRightPaneVisible ? "shrink" : ""}`}>
                        <DetailsListComponent />
                    </div>
                    <RightPaneContainer />
                </div>
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getPageData();
    }
}

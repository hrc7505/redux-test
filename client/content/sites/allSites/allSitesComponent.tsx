import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";
import { Link } from "react-router-dom";

import ButtonType from "../common/header/commandBarButtons/enums/buttonType";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IHeaderBreadcrumbPayload from "../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import IOpenRightPanelPayload from "../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "../common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import LoadingSpinner from "../../../common/loadingSpinner/loadingSpinner";
import siteDetailsListColumns from "../../common/detailsList/siteDetailsList/SiteDetailsListColumns";

export default class AllSitesComponent extends React.PureComponent<IAllSitesProps> {
    public render(): JSX.Element {
        if (this.props.isLoading) {
            return (
                <LoadingSpinner />
            );
        }

        return (
            <div className="cPanel" style={{ border: "1px solid" }}>
                <DetailsList
                    items={this.props.detailsListItems}
                    compact={true}
                    columns={siteDetailsListColumns}
                    setKey="site"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    selectionPreservedOnEmptyClick={true}
                    enterModalSelectionOnTouch={true}
                />
            </div>
        );
    }

    public componentDidMount(): void {
        this.setHeaderData();
        this.props.getData();
    }

    private setHeaderData = (): void => {
        const breadcrumbPayload: IHeaderBreadcrumbPayload = {
            path: this.props.location.pathname
        };
        this.props.setHeader(breadcrumbPayload, entityTitlePayload, commandsPayload);
    }
}

const Test2: React.SFC<object> = (): JSX.Element => (
    <div>
        Click on the next button to navigate to site details
        <Link to="/sites/909876"> NEXT</Link>
    </div>
);

const rightPaneData: IToggleSwitchRightPanePayload = {
    rightPaneId: "allSitesRightPaneId",
    rightPaneHeaderText: "Right pane for all sites",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IOpenRightPanelPayload = {
    rightPanelId: "allSitesRightPanelId",
    rightPanelHeaderText: "Test Panel",
    rightPanelContent: <Test2 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

const entityTitlePayload: IHeaderEntityTitlePayload = { title: "Sites" };
const commandsPayload: IHeaderCommandButtonsPayload = {
    buttonList: [
        {
            id: ButtonType.Add,
            name: "Site",
            itemLocation: ItemLocation.Left,
            actionPayload: rightPanelData
        },
        {
            id: ButtonType.Info,
            name: null,
            itemLocation: ItemLocation.Far,
            actionPayload: rightPaneData
        }
    ]
};

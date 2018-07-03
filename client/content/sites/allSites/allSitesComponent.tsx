import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";
import { Link } from "react-router-dom";

import ButtonType from "../common/header/commandBarButtons/enums/buttonType";
import GeneralError from "../../../common/generalError/generalError";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IHeaderPayload from "../common/interfaces/IHeaderPayload";
import IHeaderSetCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderSetCommandButtonsPayload";
import IOpenRightPanelPayload from "../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "../common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import LoadingSpinner from "../../../common/loadingSpinner/loadingSpinner";
import QueryStringUtils from "../../../utils/queryStringUtils";
import siteDetailsListColumns from "../../common/detailsList/siteDetailsList/SiteDetailsListColumns";

export default class AllSitesComponent extends React.PureComponent<IAllSitesProps> {
    private headerPayload: IHeaderPayload = {
        breadcrumbPayload: null,
        entityTitlePayload: { title: "Sites" },
        commandButtonsPayload: commandsPayload
    };

    public render(): JSX.Element {
        if (this.props.isLoading) {
            return (
                <LoadingSpinner />
            );
        }
        if (!this.props.detailsListItems) {
            // DetailsList blows up if null is passed into items. If we get into this situation,
            // we should just render an error message for the user.
            return (
                <GeneralError />
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
                { // If there are no items to render, we should render an emtpy message here.
                    this.props.detailsListItems.length === 0
                        ? <div> This list is empty. Insert nicer empty mode here. </div>
                        : null
                }
            </div>
        );
    }

    public componentDidMount(): void {
        this.setHeaderData();
        this.props.getData(QueryStringUtils.isOffineMode(this.props.history.location));
    }

    private setHeaderData = (): void => {
        this.headerPayload.breadcrumbPayload = {
            path: this.props.location.pathname
        };

        this.props.setHeader(
            this.headerPayload.breadcrumbPayload,
            this.headerPayload.entityTitlePayload,
            this.headerPayload.commandButtonsPayload);
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

const commandsPayload: IHeaderSetCommandButtonsPayload = {
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

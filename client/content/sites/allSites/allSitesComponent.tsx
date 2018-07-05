import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";

import GeneralError from "../../../common/generalError/generalError";
import HeaderFor from "../common/header/duck/operations/enums/headerFor";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IHeaderPayload from "../common/header/duck/operations/interfaces/IHeaderPayload";
import LoadingSpinner from "../../../common/loadingSpinner/loadingSpinner";
import QueryStringUtils from "../../../utils/queryStringUtils";
import siteDetailsListColumns from "../../common/detailsList/siteDetailsList/SiteDetailsListColumns";

export default class AllSitesComponent extends React.PureComponent<IAllSitesProps> {
    private headerPayload: IHeaderPayload = {
        locationPath: null,
        entityTitle: "Sites",
        headerFor: HeaderFor.AllSites,
        isUpdateCommands: true
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
        this.headerPayload.locationPath = this.props.location.pathname;
        this.props.setHeader(this.headerPayload);
    }
}

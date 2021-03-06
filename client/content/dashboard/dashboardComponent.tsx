import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";

import GeneralError from "common/generalError/generalError";
import LoadingSpinner from "common/loadingSpinner/loadingSpinner";
import siteDetailsListColumns from "content/common/detailsList/siteDetailsList/SiteDetailsListColumns";
import JobSummaryListComponent from "content/common/jobSummaryList/jobSummaryListComponent";
import IRightPaneProps from "content/common/rightPane/interfaces/IRightPaneProps";
import RightPaneComponent from "content/common/rightPane/rightPaneComponent";
import IDashboardProps from "content/dashboard/interfaces/IDashboardProps";
import QueryStringUtils from "utils/queryStringUtils";

import "content/dashboard/dashboardStyle.scss";

export default class DashboardComponent extends React.PureComponent<IDashboardProps> {
    public render(): JSX.Element {
        if (this.props.isLoading) {
            // Loading spinner when we are waiting for an async call to return.
            return (
                <LoadingSpinner />
            );
        }
        const rightPaneProps: IRightPaneProps = this.props.rightPaneProps;

        if (!this.props.detailsListItems) {
            // DetailsList blows up if null is passed into items. If we get into this situation,
            // we should just render an error message for the user.
            return (
                <GeneralError />
            );
        }

        return (
            <div className="cPanel dashboardComponent">
                <div className={`dashboardBodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                    <div className="cPanel">
                        <div className="cPanel sectionTitle">active jobs</div>
                        <JobSummaryListComponent
                            jobSummaryData={this.props.jobs}
                            tileOnClick={this.onClickNavigate}
                        />
                    </div>
                    <div className="cPanel sectionTitle">sites</div>
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
                </div>
                <RightPaneComponent {...rightPaneProps} />
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getData(QueryStringUtils.isOffineMode(this.props.history.location));
    }

    private onClickNavigate = (path: string): void => {
        this.props.history.push(path);
    }
}

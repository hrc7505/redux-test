import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
} from "office-ui-fabric-react/lib/DetailsList";
import * as React from "react";
import { Link } from "react-router-dom";

import IDashboardProps from "./interfaces/IDashboardProps";
import IRightPaneProps from "../common/rightPane/interfaces/IRightPaneProps";
import ISiteDetailsListItemData from "./interfaces/ISiteDetailsListItemData";
import JobSummaryListComponent from "../common/jobSummaryList/jobSummaryListComponent";
import RightPaneComponent from "../common/rightPane/rightPaneComponent";

import "./dashboardStyle.scss";

export default class DashboardComponent extends React.PureComponent<IDashboardProps> {
    private static detailListColumns: IColumn[] = [
        {
            key: "siteName",
            name: "Name",
            fieldName: "name",
            minWidth: 70,
            maxWidth: 100,
            isResizable: true,
            isPadded: true,
            onRender: (item: ISiteDetailsListItemData): JSX.Element => <Link to={`/sites/${item.id}`}>{item.name}</Link>
        },
        {
            key: "location",
            name: "Location",
            fieldName: "location",
            minWidth: 140,
            maxWidth: 300,
            isResizable: true,
            isPadded: true,
        },
        {
            key: "activeJobs",
            name: "Active Jobs",
            fieldName: "activeJobs",
            minWidth: 35,
            maxWidth: 35,
            isResizable: true,
            isPadded: true,
        },
        {
            key: "totalJobs",
            name: "Total Jobs",
            fieldName: "totalJobs",
            minWidth: 35,
            maxWidth: 35,
            isResizable: true,
            isPadded: true,
        }
    ];

    public render(): JSX.Element {
        const rightPaneProps: IRightPaneProps = this.props.rightPaneProps;

        return (
            <div className="cPanel dashboardComponent">
                <div className={`dashboardBodyContainer pullLeft ${rightPaneProps.isRightPaneVisible ? "shrink" : ""}`}>
                    <div className="cPanel">
                        <div className="cPanel sectionTitle">active jobs</div>
                        <JobSummaryListComponent
                            jobSummaryData={this.props.jobs}
                            tileOnClick={this.props.jobTileOnClick}
                            selectedId={rightPaneProps.rightPaneContent.key.toString()}
                        />
                    </div>
                    <div className="cPanel sectionTitle">sites</div>
                    <div className="cPanel" style={{ border: "1px solid" }}>
                        <DetailsList
                            items={this.props.detailsListItems}
                            compact={true}
                            columns={DashboardComponent.detailListColumns}
                            setKey="set"
                            layoutMode={DetailsListLayoutMode.justified}
                            isHeaderVisible={true}
                            selectionPreservedOnEmptyClick={true}
                            enterModalSelectionOnTouch={true}
                        />
                    </div>
                </div>
                <RightPaneComponent {...rightPaneProps} />
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getData();
    }
}

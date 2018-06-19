import { DetailsList, DetailsListLayoutMode, IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { Link } from "react-router-dom";

import IAllSitesComponentProps from "./interfaces/IAllSitesProps";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISiteDetailsListItemData from "../../dashboard/interfaces/ISiteDetailsListItemData";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/rightPanel/interfaces/IToggleRightPanelPayload";

export default class AllSitesComponent extends React.PureComponent<IAllSitesComponentProps> {
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
        return (
            <div className="cPanel" style={{ border: "1px solid" }}>
                <DetailsList
                    items={this.props.detailsListItems}
                    compact={true}
                    columns={AllSitesComponent.detailListColumns}
                    setKey="set"
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
        this.props.getAllSites();
        window.addEventListener("hashchange", this.setHeaderData);
    }

    public componentWillReceiveProps(): void {
        window.removeEventListener("hashchange", this.setHeaderData);
    }

    private setHeaderData = (): void => {
        this.props.setHeaderData(headerPayload);
    }
}

const Test2: React.SFC<object> = (): JSX.Element => (
    <div style={{ background: "red" }}>
        Hello this is component
    <span style={{ fontSize: "25px" }}> 2</span>
    </div>
);

const rightPaneData: ISitesToggleRightPanePayload = {
    rightPaneHeaderText: "Right pane for all sites",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IToggleRightPanelPayload = {
    rightPanelHeaderText: "Test Panel",
    rightPanelContent: <Test2 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

const headerPayload: IHeaderPayload = {
    title: "Sites",
    breadcrumb: null,
    commands: {
        farItems: [
            {
                iconProps: {
                    iconName: "Info",
                    iconType: IconType.default
                },
                key: "information",
                rightPaneData,
            }
        ],
        items: [
            {
                iconProps: {
                    iconName: "CirclePlus",
                    iconType: IconType.default
                },
                key: "site",
                name: "Site",
                rightPanelData
            },
        ],
        overflowItems: [],
    }
};

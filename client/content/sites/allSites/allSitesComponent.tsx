import { DetailsList, DetailsListLayoutMode, IColumn } from "office-ui-fabric-react/lib/DetailsList";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { Link } from "react-router-dom";

import IAllSitesComponentProps from "./interfaces/IAllSitesProps";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IOpenRightPanelPayload from "../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ISiteDetailsListItemData from "../../dashboard/interfaces/ISiteDetailsListItemData";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

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
        this.props.setBreadcrumb(breadcrumbPayload);
        this.props.setEntityTitle(entityTitlePayload);
        this.props.setCommands(commandsPayload);
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

const breadcrumbPayload: IBreadcrumbPayload = {
    breadcrumb: null,
};
const entityTitlePayload: IEnityTitlePayload = { title: "Sites" };
const commandsPayload: ICommandsPayload = {
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

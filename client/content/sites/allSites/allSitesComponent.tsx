import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib/DetailsList";
import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";
import { Link } from "react-router-dom";

import IAllSitesProps from "./interfaces/IAllSitesProps";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEntityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IOpenRightPanelPayload from "../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
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
        this.props.getData();
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
const entityTitlePayload: IEntityTitlePayload = { title: "Sites" };
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

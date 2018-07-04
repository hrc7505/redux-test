import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";
import { Link } from "react-router-dom";

import ButtonType from "../../commandBarButtons/enums/buttonType";
import HeaderFor from "./enums/headerFor";
import IHeaderSetCommandButtonsPayload from "../actions/interfaces/IHeaderSetCommandsPayload";
import IOpenRightPanelPayload from "../../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "../../commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "../../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default function getCommandsPayload(headerFor: HeaderFor): IHeaderSetCommandButtonsPayload {
    switch (headerFor) {
        case HeaderFor.AllSites:
            return {
                buttonList: [
                    {
                        id: ButtonType.Add,
                        name: "Site",
                        itemLocation: ItemLocation.Left,
                        actionPayload: allSitesRightPanelData
                    },
                    {
                        id: ButtonType.Info,
                        name: null,
                        itemLocation: ItemLocation.Far,
                        actionPayload: allSitesRightPaneData
                    }
                ]
            };

        case HeaderFor.SiteDetails:
            return {
                buttonList: [
                    {
                        id: ButtonType.Add,
                        name: "Asset",
                        itemLocation: ItemLocation.Left,
                        actionPayload: siteDetailsRightPanelData,
                    },
                    {
                        id: ButtonType.Add,
                        name: "Job",
                        itemLocation: ItemLocation.Left,
                        actionPayload: null,
                    },
                    {
                        id: ButtonType.Add,
                        name: "Files",
                        itemLocation: ItemLocation.Left,
                        actionPayload: null,
                    },
                    {
                        id: ButtonType.Add,
                        name: "Permissions",
                        itemLocation: ItemLocation.Left,
                        actionPayload: null,
                    },
                    {
                        id: ButtonType.Info,
                        name: null,
                        itemLocation: ItemLocation.Far,
                        actionPayload: siteDetailsRightPaneData
                    }
                ]
            };

        default:
            return null;
    }
}

// AllSites page header row data
const Test2: React.SFC<object> = (): JSX.Element => (
    <div>
        Click on the next button to navigate to site details
        <Link to="/sites/909876"> NEXT</Link>
    </div>
);

const allSitesRightPaneData: IToggleSwitchRightPanePayload = {
    rightPaneId: "allSitesRightPaneId",
    rightPaneHeaderText: "Right pane for all sites",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const allSitesRightPanelData: IOpenRightPanelPayload = {
    rightPanelId: "allSitesRightPanelId",
    rightPanelHeaderText: "Test Panel",
    rightPanelContent: <Test2 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

// SiteDetails page header row data
const Test1: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <TextField label="Site Name:*" placeholder="Site Name" errorMessage="Site Name is mandatory" />
        <TextField multiline label="Site Description:" placeholder="Description here..." />
        <TextField label="Phone Number:" placeholder="+1 123456789" />
        <TextField label="Street:*" placeholder="Street" />
        <TextField label="City:*" placeholder="City" />
        <TextField label="Postal Code:*" placeholder="Postal Code" />
        <Dropdown
            placeHolder="Select a City"
            label="Country:*"
            options={
                [
                    { key: "A", text: "Newyork" },
                    { key: "B", text: "Delhi" },
                    { key: "C", text: "Shangai" },
                    { key: "D", text: "Surray" },
                    { key: "E", text: "London" }
                ]
            }
        />
        <Dropdown
            placeHolder="Select a Province/State"
            label="Province/State:*"
            options={
                [
                    { key: "A", text: "State1" },
                    { key: "B", text: "State2" },
                    { key: "C", text: "State3" },
                    { key: "D", text: "State4" },
                    { key: "E", text: "State5" }
                ]
            }
        />
    </div>
);

const siteDetailsRightPaneData: IToggleSwitchRightPanePayload = {
    rightPaneId: "siteDetailsRightPaneId",
    rightPaneHeaderText: "HeaderText of the right pane",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const siteDetailsRightPanelData: IOpenRightPanelPayload = {
    rightPanelId: "siteDetailsRightPanelId",
    rightPanelHeaderText: "Add New Site",
    rightPanelContent: <Test1 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

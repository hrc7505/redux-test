import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import ButtonType from "../common/header/commandBarButtons/enums/buttonType";
import IHeaderPayload from "../common/interfaces/IHeaderPayload";
import IHeaderSetCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderSetCommandButtonsPayload";
import IInfoTileProps from "../common/infoTile/interfaces/IInfoTileProps";
import InfoTileComponent from "../common/infoTile/infoTileComponent";
import IOpenRightPanelPayload from "../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ItemLocation from "../common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import JobSummaryListComponent from "../../common/jobSummaryList/jobSummaryListComponent";

import "./siteDetailsStyle.scss";

class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    private headerPayload: IHeaderPayload = {
        breadcrumbPayload: { path: this.props.history.location.pathname },
        entityTitlePayload: null,
        commandButtonsPayload: commandsPayload
    };

    public render(): JSX.Element {
        const { rightPaneProps } = this.props;

        return (
            <div className="cPanel">
                <JobSummaryListComponent
                    jobSummaryData={this.props.site ? this.props.site.jobList : null}
                    tileOnClick={this.props.jobTileOnClick}
                    selectedId={
                        rightPaneProps.rightPaneContent && rightPaneProps.rightPaneContent.key
                            ? rightPaneProps.rightPaneContent.key.toString()
                            : null}
                />
                <div className="bodyContentTitle cPanel">Site Management </div>
                {
                    infoTileList.map((data: IInfoTileProps, i: number) => (
                        <InfoTileComponent key={i} {...data} />
                    ))
                }
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.setHeader(this.headerPayload.breadcrumbPayload, null, this.headerPayload.commandButtonsPayload);
        this.getSiteDetails();
        window.addEventListener("hashchange", this.getSiteDetails);
    }

    public componentWillReceiveProps(nextProps: ISiteDetailsProps): void {
        if (nextProps.site.id !== this.props.site.id) {
            this.headerPayload.breadcrumbPayload = { path: this.props.location.pathname };
            this.headerPayload.entityTitlePayload = {
                title: nextProps.site.name
            };
            this.props.setHeader(this.headerPayload.breadcrumbPayload, this.headerPayload.entityTitlePayload, null);
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener("hashchange", this.getSiteDetails);
    }

    private getSiteDetails = (): void => {
        if (this.props.rightPaneProps.isRightPaneVisible) {
            this.props.closeRightPane();
        }

        if (this.props.site.id !== this.props.match.params.individualSite) {
            this.props.getSiteDetails(this.props.match.params.individualSite);
        }
    }
}

export default SiteDetailsComponent;

const Test1: React.SFC<object> = (): JSX.Element => (
    <div className="cPanel">
        <TextField label="Site Name:*" placeholder="Site Name" errorMessage="Site Name is mandatory" />
        {
            // tslint:disable-next-line:no-magic-numbers
            <TextField multiline rows={4} label="Site Description:" placeholder="Description here..." />
        }
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

const rightPaneData: IToggleSwitchRightPanePayload = {
    rightPaneId: "siteDetailsRightPaneId",
    rightPaneHeaderText: "HeaderText of the right pane",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IOpenRightPanelPayload = {
    rightPanelId: "siteDetailsRightPanelId",
    rightPanelHeaderText: "Add New Site",
    rightPanelContent: <Test1 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

const commandsPayload: IHeaderSetCommandButtonsPayload = {
    buttonList: [
        {
            id: ButtonType.Add,
            name: "Asset",
            itemLocation: ItemLocation.Left,
            actionPayload: rightPanelData,
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
            actionPayload: rightPaneData
        }
    ]
};

const infoTileList: IInfoTileProps[] = [
    {
        infoTileIcon: "icon",
        infoTileTitle: "Assets",
        infoTileDetailsList: [
            {
                field: "unit",
                value: 14
            },
            {
                field: "piping",
                value: 10
            }
        ]
    },
    {
        infoTileIcon: "icon",
        infoTileTitle: "jobs",
        infoTileDetailsList: [
            {
                field: "active",
                value: 143
            },
            {
                field: "completed",
                value: 104
            },
            {
                field: "archived",
                value: 150
            }
        ]
    },
    {
        infoTileIcon: "icon",
        infoTileTitle: "permissions",
        infoTileDetailsList: [
            {
                field: "member",
                value: 5
            },
        ]
    }
];

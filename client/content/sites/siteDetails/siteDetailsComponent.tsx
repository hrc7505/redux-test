
import * as History from "history";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from "react";

import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import IAssetsInfoTileProps from "content/sites/common/infoTile/types/IAssetsInfoTileProps";
import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";
import IFilesInfoTileProps from "content/sites/common/infoTile/types/IFilesInfoTileProps";
import IInfoTileProps from "content/sites/common/infoTile/interfaces/IInfoTileProps";
import IJobsInfoTileProps from "content/sites/common/infoTile/types/IJobsInfoTileProps";
import InfoTileComponent from "content/sites/common/infoTile/infoTileComponent";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ISiteDetailsProps from "content/sites/siteDetails/interfaces/ISiteDetailsProps";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import JobSummaryListComponent from "content/common/jobSummaryList/jobSummaryListComponent";
import LoadingSpinner from "common/loadingSpinner/loadingSpinner";

import "content/sites/siteDetails/siteDetailsStyle.scss";

export default class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    private unlisten: History.UnregisterCallback;

    private commands: ICommandButton[] = [
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
    ];

    public render(): JSX.Element {
        const { site } = this.props;
        const infoTileList: IInfoTileProps[] = [
            new IAssetsInfoTileProps(site.numberOfUnits, site.numberOfPiping),
            new IJobsInfoTileProps(site.numberOfActiveJobs, site.numberOfCompletedJobs, site.numberOfArchivedJobs),
            new IFilesInfoTileProps(site.numberOfFiles)
        ];

        if (this.props.isLoading) {
            return (
                <LoadingSpinner />
            );
        }

        return (
            <div className="cPanel">
                <JobSummaryListComponent
                    jobSummaryData={this.props.jobs}
                    tileOnClick={this.props.jobTileOnClick}
                    selectedId={
                        this.props.isRightPaneVisible
                            ? this.props.rightPaneId
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
        this.updateHeader();
        this.getDataForPage(this.props.location);
        this.unlisten = this.props.history.listen((location: History.Location, action: History.Action) => {
            const regex: RegExp = new RegExp("^\/sites\/[^/]+[\/]?$", "gm");
            if (regex.test(location.pathname) && action === "PUSH") {
                this.getDataForPage(location);
            }
        });
    }

    public componentDidUpdate(prevProps: ISiteDetailsProps): void {
        if (this.props.site && this.props.site.id !== prevProps.site.id) {
            this.updateHeader();
        }
    }

    public componentWillUnmount(): void {
        this.unlisten();
    }

    /**
     * Updates the header of the page.
     */
    private updateHeader = (): void => (this.props.setHeader({
        locationPath: this.props.history.location.pathname
            ? this.props.history.location.pathname
            : null,
        entityTitle: this.props.site.name
            ? this.props.site.name
            : null,
        commands: this.commands,
    }))

    /**
     * Gets the data for the page. The Site ID is determined by the parameter.
     * @param location The location object used to determine the Site ID.
     * We do not use the location from props directly as that might not be up-to-date.
     */
    private getDataForPage = (location: History.Location): void => {
        // Obtaining the Site ID from the URL.
        const splitPathString: string[] = location.pathname.split("/");
        const siteIdFromPath: string = splitPathString[splitPathString.length - 1];

        // Getting the data of the site based on the obtained Site ID in the URL.
        this.props.getData(false, siteIdFromPath);
    }
}

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

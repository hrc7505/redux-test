import * as History from "history";
import * as React from "react";

import HeaderFor from "../common/header/duck/operations/enums/headerFor";
import IAssetsInfoTileProps from "../common/infoTile/types/IAssetsInfoTileProps";
import IFilesInfoTileProps from "../common/infoTile/types/IFilesInfoTileProps";
import IInfoTileProps from "../common/infoTile/interfaces/IInfoTileProps";
import IJobsInfoTileProps from "../common/infoTile/types/IJobsInfoTileProps";
import InfoTileComponent from "../common/infoTile/infoTileComponent";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import JobSummaryListComponent from "../../common/jobSummaryList/jobSummaryListComponent";
import LoadingSpinner from "../../../common/loadingSpinner/loadingSpinner";

import "./siteDetailsStyle.scss";

export default class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    private unlisten: History.UnregisterCallback;

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
        headerFor: HeaderFor.SiteDetails,
        isUpdateCommands: true
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

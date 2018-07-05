import * as React from "react";

import HeaderFor from "../common/header/duck/operations/enums/headerFor";
import IAssetsInfoTileProps from "../common/infoTile/types/IAssetsInfoTileProps";
import IFilesInfoTileProps from "../common/infoTile/types/IFilesInfoTileProps";
import IHeaderPayload from "../common/header/duck/operations/interfaces/IHeaderPayload";
import IInfoTileProps from "../common/infoTile/interfaces/IInfoTileProps";
import IJobsInfoTileProps from "../common/infoTile/types/IJobsInfoTileProps";
import InfoTileComponent from "../common/infoTile/infoTileComponent";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import JobSummaryListComponent from "../../common/jobSummaryList/jobSummaryListComponent";
import LoadingSpinner from "../../../common/loadingSpinner/loadingSpinner";

import "./siteDetailsStyle.scss";

export default class SiteDetailsComponent extends React.PureComponent<ISiteDetailsProps> {
    public render(): JSX.Element {
        const { rightPaneProps, site } = this.props;
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
                    jobSummaryData={null}
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
        this.props.setHeader({
            locationPath: null,
            entityTitle: null,
            headerFor: HeaderFor.SiteDetails,
            isUpdateCommands: true
        });
        this.getDataForPage();
        window.addEventListener("hashchange", this.getDataForPage);
    }

    public componentDidUpdate(prevProps: ISiteDetailsProps): void {
        if (this.props.site && this.props.site.id !== prevProps.site.id) {
            const headerPayload: IHeaderPayload = {
                locationPath: this.props.history.location.pathname,
                entityTitle: this.props.site.name,
                headerFor: HeaderFor.SiteDetails
            };
            this.props.setHeader(headerPayload);
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener("hashchange", this.getDataForPage);
    }

    private getDataForPage = (): void => {
        const splitPathString: string[] = this.props.location.pathname.split("/");
        const siteIdFromPath: string = splitPathString[splitPathString.length - 1];

        if (this.props.site.id !== siteIdFromPath) {
            this.props.getData(false, siteIdFromPath);
        }
    }
}

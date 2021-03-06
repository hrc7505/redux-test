import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";

export default interface IContentState {
    /**
     * Flag to show the loading spinner.
     */
    isLoading: boolean;

    /**
     * Data used for the active jobs tiles.
     */
    activeJobs: IJobTileData[];

    /**
     * Data used for the sites list.
     */
    sites: ISiteDetailsListItemData[];
}

import IJobTileData from "../../../common/jobSummaryList/interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

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

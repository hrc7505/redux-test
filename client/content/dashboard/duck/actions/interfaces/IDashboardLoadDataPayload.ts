import IJobData from "../../../../common/jobSummaryList/interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IDashboardLoadDataPayload {
    activeJobs: IJobData[];
    sites: ISiteDetailsListItemData[];
}

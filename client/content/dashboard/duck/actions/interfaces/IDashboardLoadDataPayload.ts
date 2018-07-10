import IJobData from "content/common/jobSummaryList/interfaces/IJobTileData";
import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IDashboardLoadDataPayload {
    activeJobs: IJobData[];
    sites: ISiteDetailsListItemData[];
}

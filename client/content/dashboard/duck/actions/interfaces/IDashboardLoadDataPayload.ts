import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import IJobData from "content/common/jobSummaryList/interfaces/IJobTileData";

export default interface IDashboardLoadDataPayload {
    activeJobs: IJobData[];
    sites: ISiteDetailsListItemData[];
}

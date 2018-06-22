import IJobData from "../../../../common/jobSummaryList/interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../../interfaces/ISiteDetailsListItemData";

export default interface IDashboardLoadDataPayload {
    activeJobs: IJobData[];
    sites: ISiteDetailsListItemData[];
}

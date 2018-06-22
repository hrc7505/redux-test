import IJobInfo from "../../../../../models/jobs/IJobInfo";
import ISiteInfo from "../../../../../models/sites/ISiteInfo";

// This interface is TBD depending on server.

export default interface IDashboardDataResponse {
    jobs: IJobInfo[];
    sites: ISiteInfo[];
}

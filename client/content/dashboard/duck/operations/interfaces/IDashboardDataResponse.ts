import IJobInfo from "./IJobInfo";
import ISiteInfo from "./ISiteInfo";

// This interface is TBD depending on server.

export default interface IDashboardDataResponse {
    jobs: IJobInfo[];
    sites: ISiteInfo[];
}

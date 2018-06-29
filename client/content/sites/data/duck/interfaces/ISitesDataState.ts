import IJobInfo from "../../../../../models/jobs/IJobInfo";
import ISiteInfo from "../../../../../models/sites/ISiteInfo";

export default interface ISitesDataState {
    sites: { [siteId: string]: ISiteInfo };
    jobs: { [jobId: string]: IJobInfo };
}
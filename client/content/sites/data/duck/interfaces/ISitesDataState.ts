import IJobData from "./IJobData";
import ISiteData from "./ISiteData";

export default interface ISitesDataState {
    sites: ISiteData;
    jobs: IJobData;
}

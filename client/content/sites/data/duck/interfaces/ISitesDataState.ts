import IJobData from "content/sites/data/duck/interfaces/IJobData";
import ISiteData from "content/sites/data/duck/interfaces/ISiteData";

export default interface ISitesDataState {
    sites: ISiteData;
    jobs: IJobData;
}

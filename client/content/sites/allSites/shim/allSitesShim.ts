import IAllSitesDataResponse from "../duck/operations/interfaces/IAllSitesDataResponse";
import ISiteInfo from "../../../../models/sites/ISiteInfo";

export default class AllSitesShim {
    private static sites: ISiteInfo[] = [
        {
            id: "909876",
            name: "My house",
            location: "99 SE 10th St",
            activeJobs: "1",
            totalJobs: "1",
        },
        {
            id: "909877",
            name: "My office",
            location: "1188 West Pender St",
            activeJobs: "1",
            totalJobs: "10",
        },
    ];

    public static getData(): IAllSitesDataResponse {
        return {
            sites: AllSitesShim.sites
        };
    }
}

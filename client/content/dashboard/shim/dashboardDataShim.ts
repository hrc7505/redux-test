import IDashboardDataResponse from "../duck/operations/interfaces/IDashboardDataResponse";
import IJobInfo from "../duck/operations/interfaces/IJobInfo";
import ISiteInfo from "../duck/operations/interfaces/ISiteInfo";

export default class DashboardDataShim {
    private static jobs: IJobInfo[] = [
        {
            id: "456",
            title: "foo",
            site: "My house",
            createDate: "01/01/2000",
            status: "Active"
        },
        {
            id: "123",
            title: "bar",
            site: "My office",
            createDate: "11/19/1999",
            status: "Active"
        },
        {
            id: "888",
            title: "baz",
            site: "My mansion",
            createDate: "09/01/2018",
            status: "Active"
        },
    ];

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

    public static getData(): IDashboardDataResponse {
        return {
            jobs: DashboardDataShim.jobs,
            sites: DashboardDataShim.sites
        };
    }
}

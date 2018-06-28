import IDashboardResponseResult from "../duck/operations/interfaces/IDashboardResponseResult";
import IJobInfo from "../../../models/jobs/IJobInfo";
import ISiteInfo from "../../../models/sites/ISiteInfo";

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
            tenantId: "100",
            name: "My house",
            isActive: true,
            description: "This is my house.",
            street: "99 SE 10th St",
            city: "Vancouver",
            state: "British Columbia",
            postalCode: "A1A 3D3",
            country: "Canada",
            phoneNumber: "18001001000",
            activeJobs: "1",
            totalJobs: "1",
        },
        {
            id: "909877",
            tenantId: "100",
            name: "My office",
            isActive: true,
            description: "Please take a seat.",
            street: "1188 West Pender St",
            city: "Vancouver",
            state: "British Columbia",
            postalCode: "B1B 8D8",
            country: "Canada",
            phoneNumber: "18002002000",
            activeJobs: "1",
            totalJobs: "10",
        },
    ];

    public static getData(): IDashboardResponseResult {
        return {
            activeJobs: DashboardDataShim.jobs,
            activeSites: DashboardDataShim.sites
        };
    }
}

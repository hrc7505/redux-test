import IDashboardResponseResult from "../duck/operations/interfaces/IDashboardResponseResult";
import IJobModel from "../../../models/jobs/IJobModel";
import ISiteModel from "../../../models/sites/ISiteModel";

export default class DashboardDataShim {
    private static jobs: IJobModel[] = [
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

    private static sites: ISiteModel[] = [
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
            numberOfUnits: 1,
            numberOfPiping: 2,
            numberOfActiveJobs: 3,
            numberOfCompletedJobs: 4,
            numberOfArchivedJobs: 5,
            numberOfTotalJobs: 6,
            numberOfFiles: 7,
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
            numberOfUnits: 10,
            numberOfPiping: 20,
            numberOfActiveJobs: 30,
            numberOfCompletedJobs: 40,
            numberOfArchivedJobs: 50,
            numberOfTotalJobs: 60,
            numberOfFiles: 70,
        },
    ];

    public static getData(): IDashboardResponseResult {
        return {
            activeJobs: DashboardDataShim.jobs,
            activeSites: DashboardDataShim.sites
        };
    }
}

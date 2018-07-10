import ISiteModel from "models/sites/ISiteModel";

export default class AllSitesShim {
    private static sites: ISiteModel[] = [
        {
            id: "0",
            tenantId: "100",
            name: "My house",
            status: "Active",
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
            createdBy: "Jeff",
            createdAt: "2018-01-05T19:11:11+00:00",
            updatedBy: "Jeff",
            updatedAt: "2018-01-05T19:11:11+00:00",
        },
        {
            id: "00",
            tenantId: "100",
            name: "My office",
            status: "Active",
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
            createdBy: "Jeff",
            createdAt: "2018-01-01T19:11:11+00:00",
            updatedBy: "Jeff",
            updatedAt: "2018-01-01T19:11:11+00:00",
        },
    ];

    public static getData(): ISiteModel[] {
        return AllSitesShim.sites;
    }
}

import ISiteInfo from "../../../../models/sites/ISiteInfo";

export default class AllSitesShim {
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

    public static getData(): ISiteInfo[] {
        return AllSitesShim.sites;
    }
}

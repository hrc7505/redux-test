
import ISiteModel from "../../../../models/sites/ISiteModel";

export default class SiteDetailsShim {
    private static site: ISiteModel = {
            id: "0",
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
    };

    public static getData(): ISiteModel {
        return SiteDetailsShim.site;
    }
}

/**
 * Site information from the server.
 */
export default interface ISiteModel{
    // Basic information for a site.
    id: string;
    tenantId: string;
    name: string;
    isActive: boolean;
    description: string;

    // Coordinates of a site.
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;

    // Site metrics.
    numberOfUnits: number;
    numberOfPiping: number;
    numberOfActiveJobs: number;
    numberOfCompletedJobs: number;
    numberOfArchivedJobs: number;
    numberOfTotalJobs: number;
    numberOfFiles: number;
}

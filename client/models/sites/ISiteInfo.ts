/**
 * Site information from the server.
 */
export default interface ISiteInfo {
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

    // Job information for a site.
    activeJobs?: string;
    totalJobs?: string;
}

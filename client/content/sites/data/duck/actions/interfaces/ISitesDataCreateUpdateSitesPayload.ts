import ISiteModel from "../../../../../../models/sites/ISiteModel";

export default interface ISitesDataCreateUpdateSitesPayload {
    sites: { [siteId: string]: ISiteModel};
}

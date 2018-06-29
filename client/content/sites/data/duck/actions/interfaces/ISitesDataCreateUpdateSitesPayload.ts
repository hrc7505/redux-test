import ISiteInfo from "../../../../../../models/sites/ISiteInfo";

export default interface ISitesDataCreateUpdateSitesPayload {
    sites: { [siteId: string]: ISiteInfo };
}

import ISiteInfo from "../../../../../models/sites/ISiteInfo";

export default interface ISiteData {
    [siteId: string]: ISiteInfo;
}

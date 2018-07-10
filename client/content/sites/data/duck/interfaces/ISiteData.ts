import ISiteModel from "models/sites/ISiteModel";

export default interface ISiteData {
    [siteId: string]: ISiteModel;
}

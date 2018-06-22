import ISiteDetailsListItemData from "../../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IAllSitesState {
    sites: ISiteDetailsListItemData[];
    isLoading: boolean;
}

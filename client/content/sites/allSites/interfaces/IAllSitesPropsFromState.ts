import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IAllSitesPropsFromState {
    detailsListItems: ISiteDetailsListItemData[];
    isLoading: boolean;
}

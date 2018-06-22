import ISiteDetailsListItemData from "../../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IAllSitesPropsFromState {
    detailsListItems: ISiteDetailsListItemData[];
    isLoading: boolean;
}

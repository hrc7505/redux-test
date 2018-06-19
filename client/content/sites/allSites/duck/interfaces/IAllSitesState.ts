import ISiteDetailsListItemData from "../../../../dashboard/interfaces/ISiteDetailsListItemData";

export default interface IAllSitesState {
    sites: ISiteDetailsListItemData[];
    isLoading: boolean;
}

import IJobTileData from "./IJobTileData";
import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";
import ISiteDetailsListItemData from "./ISiteDetailsListItemData";

export default interface IDashboardPropsFromState {
    rightPaneProps: IRightPaneProps;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

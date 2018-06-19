import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";
import IJobTileData from "./IJobTileData";
import ISiteDetailsListItemData from "./ISiteDetailsListItemData";

export default interface IDashboardPropsFromState {
    rightPaneProps: IRightPaneProps;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

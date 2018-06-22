import IJobTileData from "../../common/jobSummaryList/interfaces/IJobTileData";
import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";
import ISiteDetailsListItemData from "../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IDashboardPropsFromState {
    rightPaneProps: IRightPaneProps;
    rightPaneId: string;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

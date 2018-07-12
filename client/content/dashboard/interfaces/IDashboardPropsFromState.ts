import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import IRightPaneProps from "content/common/rightPane/interfaces/IRightPaneProps";

export default interface IDashboardPropsFromState {
    rightPaneProps: IRightPaneProps;
    rightPaneId: string;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

import { RouteComponentProps } from "react-router";

import IJobTileData from "../../common/jobSummaryList/interfaces/IJobTileData";
import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";
import ISiteDetailsListItemData from "../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IDashboardPropsFromState extends RouteComponentProps<string> {
    rightPaneProps: IRightPaneProps;
    rightPaneId: string;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

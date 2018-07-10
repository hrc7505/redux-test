import { RouteComponentProps } from "react-router";

import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import IRightPaneProps from "content/common/rightPane/interfaces/IRightPaneProps";
import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";

export default interface IDashboardPropsFromState extends RouteComponentProps<string> {
    rightPaneProps: IRightPaneProps;
    rightPaneId: string;
    detailsListItems: ISiteDetailsListItemData[];
    jobs: IJobTileData[];
    isLoading: boolean;
}

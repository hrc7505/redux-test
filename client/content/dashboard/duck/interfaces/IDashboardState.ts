import IJobTileData from "../../interfaces/IJobTileData";
import ISiteDetailsListItemData from "../../interfaces/ISiteDetailsListItemData";

export default interface IDashboardState {
    // Right Pane.
    isRightPaneVisible: boolean;
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;

    // Dashboard content.
    isLoading: boolean;
    activeJobs: IJobTileData[];
    sites: ISiteDetailsListItemData[];
}

import IDashboardToggleRightPanePayload from "../../../dashboard/duck/actions/interfaces/IDashboardToggleRightPanePayload";
import IJobTileData from "../../../dashboard/interfaces/IJobTileData";

export default interface IJobSummaryListProps {
    jobSummaryData: IJobTileData[];
    selectedId: string;
    tileOnClick: (actionPayload: IDashboardToggleRightPanePayload) => void;
}

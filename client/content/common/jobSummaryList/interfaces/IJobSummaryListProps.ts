import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IJobSummaryListProps {
    jobSummaryData: IJobTileData[];
    selectedId: string;
    tileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
}

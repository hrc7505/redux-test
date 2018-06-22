import IJobTileData from "../../../common/jobSummaryList/interfaces/IJobTileData";
import IToggleSwitchRightPanePayload from "../../rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IJobSummaryListProps {
    jobSummaryData: IJobTileData[];
    selectedId: string;
    tileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
}

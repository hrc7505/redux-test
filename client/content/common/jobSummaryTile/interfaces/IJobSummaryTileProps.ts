import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IJobSummaryTileProps extends IJobTileData {
    tileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
    isSelected: boolean;
}

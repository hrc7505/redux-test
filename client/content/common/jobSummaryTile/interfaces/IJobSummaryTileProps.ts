import IJobTileData from "../../jobSummaryList/interfaces/IJobTileData";
import IToggleSwitchRightPanePayload from "../../rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IJobSummaryTileProps extends IJobTileData {
    tileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
    isSelected: boolean;
}

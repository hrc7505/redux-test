import IToggleSwitchRightPanePayload from "../../rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IJobSummaryTileProps {
    jobTitle: string;
    jobSite: string;
    jobCreatedDate: string;
    jobStatus: string;
    jobId: string;
    tileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
    isSelected: boolean;
}

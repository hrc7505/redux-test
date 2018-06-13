import IDashboardToggleRightPanePayload from "../../../dashboard/duck/actions/interfaces/IDashboardToggleRightPanePayload";

export default interface IJobSummaryTileProps {
    jobTitle: string;
    jobSite: string;
    jobCreatedDate: string;
    jobStatus: string;
    jobId: string;
    tileOnClick: (actionPayload: IDashboardToggleRightPanePayload) => void;
    isSelected: boolean;
}
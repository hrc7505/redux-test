export default interface IJobSummaryTileProps {
    jobTitle: string;
    jobSite: string;
    jobCreatedDate: string;
    jobStatus: string;
    jobId: string;
    tileOnClick: (rightPaneData: JSX.Element) => void;
    isSelected: boolean;
}

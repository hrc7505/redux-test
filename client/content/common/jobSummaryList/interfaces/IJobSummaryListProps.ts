import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";

export default interface IJobSummaryListProps {
    jobSummaryData: IJobTileData[];
    tileOnClick: (url: string) => void;
}

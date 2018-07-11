import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";

export default interface IJobSummaryTileProps extends IJobTileData {
    tileOnClick: (url: string) => void;
}

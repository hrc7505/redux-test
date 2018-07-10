import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import ISiteModel from "models/sites/ISiteModel";

export default interface ISiteDetailsPropsFromState {
    site: ISiteModel;
    jobs: IJobTileData[];
    isLoading: boolean;
    isRightPaneVisible: boolean;
    rightPaneId: string;
}

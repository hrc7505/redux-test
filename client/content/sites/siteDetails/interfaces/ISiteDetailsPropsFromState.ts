import IRightPaneProps from "../../../common/rightPane/interfaces/IRightPaneProps";
import IJobModel from "../../../../models/jobs/IJobModel";
import ISiteModel from "../../../../models/sites/ISiteModel";

export default interface ISiteDetailsPropsFromState {
    site: ISiteModel;
    jobs: IJobModel;
    isLoading: boolean;
    rightPaneProps: IRightPaneProps;
}

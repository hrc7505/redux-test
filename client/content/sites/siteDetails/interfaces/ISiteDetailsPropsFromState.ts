import IRightPaneProps from "../../../common/rightPane/interfaces/IRightPaneProps";
import { ISiteDetails } from "../../common/dummyData/testData";

export default interface ISiteDetailsPropsFromState {
    site: ISiteDetails;
    rightPaneProps: IRightPaneProps;
}

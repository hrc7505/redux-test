import IRightPaneProps from "../../../common/rightPane/interfaces/IRightPaneProps";
import { ISiteDetails } from "../../common/detailListHost/testData";

export default interface ISiteDetailsPropsFromState {
    site: ISiteDetails;
    rightPaneProps: IRightPaneProps;
}

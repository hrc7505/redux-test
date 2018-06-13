import IHeaderComponentProps from "../header/interfaces/iHeaderComponentProps";
import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";

export default interface ISitePropsFromState {
    rightPaneProps: IRightPaneProps;
    headerData: IHeaderComponentProps;
}

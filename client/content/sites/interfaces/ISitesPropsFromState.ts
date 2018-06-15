import IHeaderComponentProps from "../common/header/interfaces/IHeaderComponentProps";
import IRightPaneProps from "../../common/rightPane/interfaces/IRightPaneProps";

export default interface ISitesPropsFromState {
    rightPaneProps: IRightPaneProps;
    headerData: IHeaderComponentProps;
}

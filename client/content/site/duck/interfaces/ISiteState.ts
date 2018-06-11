import IHeaderComponentProps from "../../header/interfaces/iHeaderComponentProps";

export default interface ISiteState {
    isRightPaneVisible: boolean;
    rightPaneData: JSX.Element;
    headerData: IHeaderComponentProps;
}

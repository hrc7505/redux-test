import IHeaderComponentProps from "../header/interfaces/iHeaderComponentProps";

export default interface ISitePropsFromState {
    isRightPaneVisible: boolean;
    rightPaneData: JSX.Element;
    headerData: IHeaderComponentProps;
}

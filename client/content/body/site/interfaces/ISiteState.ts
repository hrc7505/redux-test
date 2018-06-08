import IHeaderComponentProps from "../header/interfaces/iHeaderComponentProps";

export default interface ISiteState {
    isRightPaneVisible: boolean;
    isLeftMenuVisible: boolean;
    getPageData: () => void;
    headerData: IHeaderComponentProps;
}

import IHeaderComponentProps from "../header/interfaces/iHeaderComponentProps";

export default interface ISiteComponentProps {
    isRightPaneVisible: boolean;
    isLeftMenuVisible: boolean;
    getPageData: () => void;
    headerData: IHeaderComponentProps;
}

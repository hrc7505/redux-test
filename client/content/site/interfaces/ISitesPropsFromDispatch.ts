import IGetSitesPageContentsAction from "../duck/actions/interfaces/IGetSitesPageContentsAction";

export default interface ISitesPropsFromDispatch {
    getPageData: () => IGetSitesPageContentsAction;
}

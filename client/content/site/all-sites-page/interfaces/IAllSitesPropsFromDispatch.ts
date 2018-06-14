import IGetSitesPageContentsAction from "../../duck/actions/interfaces/IGetSitesPageContentsAction";

export default interface IAllSitesPropsFromDispatch {
    getPageData: () => IGetSitesPageContentsAction;
}

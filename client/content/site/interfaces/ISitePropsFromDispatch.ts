import IGetSitePageContentsAction from "../duck/actions/interfaces/iGetSitePageContentsAction";

export default interface ISitePropsFromDispatch {
    getPageData: () => IGetSitePageContentsAction;
}

import IGetIndividualSitePageContentsAction from "../../duck/actions/interfaces/IGetIndividualSitePageContentsAction";

export default interface IIndividualSitePropsFromDispatch {
    getPageData: () => IGetIndividualSitePageContentsAction;
}

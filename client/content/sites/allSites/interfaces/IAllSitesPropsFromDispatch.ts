import IHeaderSetBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbPayload";
import IHeaderSetCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderSetCommandButtonsPayload";
import IHeaderSetEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderSetEntityTitlePayload";

export default interface IAllSitesPropsFromDispatch {
    getData: (useShim: boolean) => void;
    setHeader: (
        breadcrumbPayload: IHeaderSetBreadcrumbPayload,
        entityTitlePayload: IHeaderSetEntityTitlePayload,
        commandButtonsPayload: IHeaderSetCommandButtonsPayload
    ) => void;
}

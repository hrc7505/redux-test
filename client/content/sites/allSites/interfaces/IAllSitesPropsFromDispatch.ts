import IHeaderBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";

export default interface IAllSitesPropsFromDispatch {
    getData: (useShim: boolean) => void;
    setHeader: (
        breadcrumbPayload: IHeaderBreadcrumbPayload,
        entityTitlePayload: IHeaderEntityTitlePayload,
        commandButtonsPayload: IHeaderCommandButtonsPayload
    ) => void;
}

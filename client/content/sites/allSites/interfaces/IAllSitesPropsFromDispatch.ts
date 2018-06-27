import IHeaderBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import IHeaderSetBreadcrumbAction from "../../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../../common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../../common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";

export default interface IAllSitesPropsFromDispatch {
    setBreadcrumb: (actionPayload: IHeaderBreadcrumbPayload) => IHeaderSetBreadcrumbAction;
    setEntityTitle: (actionPayload: IHeaderEntityTitlePayload) => IHeaderSetEntityTitleAction;
    setCommands: (actionPayload: IHeaderCommandButtonsPayload) => IHeaderSetCommandsAction;
    getData: () => void;
}

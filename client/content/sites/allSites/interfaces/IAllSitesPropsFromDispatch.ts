import IBreadcrumbPayload from "../../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandButtonsPayload from "../../common/header/duck/actions/interfaces/ICommandButtonsPayload";
import IEnityTitlePayload from "../../common/header/duck/actions/interfaces/IEntityTitlePayload";
import ISetBreadcrumbAction from "../../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../../common/header/duck/actions/interfaces/ISetEntityTitleAction";

export default interface IAllSitesPropsFromDispatch {
    setBreadcrumb: (actionPayload: IBreadcrumbPayload) => ISetBreadcrumbAction;
    setEntityTitle: (actionPayload: IEnityTitlePayload) => ISetEntityTitleAction;
    setCommands: (actionPayload: ICommandButtonsPayload) => ISetCommandsAction;
    getData: () => void;
}

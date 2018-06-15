import IHeaderPayload from "../../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../../duck/actions/interfaces/ISetHeaderDataAction";
import ISitesToggleRightPaneByJobTileAction from "../../duck/actions/interfaces/ISitesToggleRightPaneByJobTileAction";
import ISitesToggleRightPanePayload from "../../duck/actions/interfaces/ISitesToggleRightPanePayload";

export default interface ISiteDetailsPropsFromDispatch {
    setHeaderData: (actionPayload: IHeaderPayload) => ISetHeaderDataAction;
    jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload) => ISitesToggleRightPaneByJobTileAction;
}

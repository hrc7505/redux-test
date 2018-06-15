import IHeaderPayload from "../../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../../duck/actions/interfaces/ISetHeaderDataAction";

export default interface IAllSitesPropsFromDispatch {
    setHeaderData: (actionPayload: IHeaderPayload) => ISetHeaderDataAction;
}

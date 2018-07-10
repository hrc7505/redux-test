import IHeaderPayload from "content/sites/common/header/duck/operations/interfaces/IHeaderPayload";

export default interface IAllSitesPropsFromDispatch {
    getData: (useShim: boolean) => void;
    setHeader: (headerPayload: IHeaderPayload) => void;
}

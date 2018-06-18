import { connect, Dispatch } from "react-redux";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import getAllSites from "./duck/actions/getAllSites";
import IAllSitesComponentProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetAllSitesAction from "./duck/actions/interfaces/IGetAllSitesAction";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../duck/actions/interfaces/ISetHeaderDataAction";
import setHeaderContent from "../../sites/duck/actions/setHeaderContent";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        sites: state.sitesState.allSitesState.sites
    };
}

function mapDispatchToProps(dispatch: Dispatch<ISetHeaderDataAction | IGetAllSitesAction>): IAllSitesPropsFromDispatch {
    return {
        setHeaderData: (actionPayload: IHeaderPayload): ISetHeaderDataAction =>
            dispatch(setHeaderContent(actionPayload)),
        getAllSites: (): IGetAllSitesAction => dispatch(getAllSites())
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesComponentProps>(AllSitesComponent);

export default AllSitesContainer;

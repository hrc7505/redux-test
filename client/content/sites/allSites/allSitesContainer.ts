import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import getAllSites from "./duck/operations/getAllSites";
import IAllSitesComponentProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import IGetAllSitesAction from "./duck/actions/interfaces/IRequestAllSitesAction";
import ISetHeaderDataAction from "../duck/actions/interfaces/ISetHeaderDataAction";
import setHeaderContent from "../../sites/duck/actions/setHeaderContent";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: state.sitesState.allSitesState.sites
    };
}

type Actions = ISetHeaderDataAction | IGetAllSitesAction;

function mapDispatchToProps(dispatch: ThunkDispatch<IAppState, void, Actions>): IAllSitesPropsFromDispatch {
    return {
        setHeaderData: (actionPayload: IHeaderPayload): ISetHeaderDataAction =>
            dispatch(setHeaderContent(actionPayload)),
        getAllSites: (): void => { dispatch(getAllSites()); },
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesComponentProps>(AllSitesComponent);

export default AllSitesContainer;

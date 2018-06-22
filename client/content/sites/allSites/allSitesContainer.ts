import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import allSitesGetData from "./duck/operations/allSitesGetData";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAllSitesRequestDataAction from "./duck/actions/interfaces/IAllSitesRequestDataAction";
import IAppState from "../../../duck/interfaces/IAppState";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import ISetBreadcrumbAction from "../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import setBreadcrumb from "../common/header/duck/actions/setBreadcrumb";
import setCommands from "../common/header/duck/actions/setCommands";
import setEntityTitle from "../common/header/duck/actions/setEntityTitle";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: state.sitesState.allSitesState.sites,
        isLoading: state.sitesState.allSitesState.isLoading,
    };
}

type Actions = IAllSitesRequestDataAction | ISetEntityTitleAction | ISetCommandsAction | ISetBreadcrumbAction;

function mapDispatchToProps(dispatch: ThunkDispatch<IAppState, void, Actions>): IAllSitesPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IBreadcrumbPayload): ISetBreadcrumbAction =>
            (dispatch(setBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IEnityTitlePayload): ISetEntityTitleAction =>
            dispatch(setEntityTitle(actionPayload)),
        setCommands: (actionPayload: ICommandsPayload): ISetCommandsAction =>
            dispatch(setCommands(actionPayload)),
        getData: (): void => { dispatch(allSitesGetData()); },
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesProps>(AllSitesComponent);

export default AllSitesContainer;

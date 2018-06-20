import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import getAllSites from "./duck/operations/getAllSites";
import IAllSitesComponentProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAppState from "../../../duck/interfaces/IAppState";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IGetAllSitesAction from "./duck/actions/interfaces/IRequestAllSitesAction";
import ISetBreadcrumbAction from "../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import setBreadcrumb from "../common/header/duck/actions/setBreadcrumb";
import setCommands from "../common/header/duck/actions/setCommands";
import setEntityTitle from "../common/header/duck/actions/setEntityTitle";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: state.sitesState.allSitesState.sites
    };
}

type Actions = IGetAllSitesAction | ISetEntityTitleAction | ISetCommandsAction | ISetBreadcrumbAction;

function mapDispatchToProps(dispatch: ThunkDispatch<IAppState, void, Actions>): IAllSitesPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IBreadcrumbPayload): ISetBreadcrumbAction =>
            (dispatch(setBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IEnityTitlePayload): ISetEntityTitleAction =>
            dispatch(setEntityTitle(actionPayload)),
        setCommands: (actionPayload: ICommandsPayload): ISetCommandsAction =>
            dispatch(setCommands(actionPayload)),
        getAllSites: (): void => { dispatch(getAllSites()); },
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesComponentProps>(AllSitesComponent);

export default AllSitesContainer;

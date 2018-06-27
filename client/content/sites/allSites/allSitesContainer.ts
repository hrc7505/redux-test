import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import allSitesGetData from "./duck/operations/allSitesGetData";
import headerSetBreadcrumb from "../common/header/duck/actions/headerSetBreadcrumb";
import headerSetCommands from "../common/header/duck/actions/headerSetCommands";
import headerSetEntityTitle from "../common/header/duck/actions/headerSetEntityTitle";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAllSitesRequestDataAction from "./duck/actions/interfaces/IAllSitesRequestDataAction";
import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderBreadcrumbPayload from "../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import IHeaderSetBreadcrumbAction from "../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: state.sitesState.allSitesState.sites,
        isLoading: state.sitesState.allSitesState.isLoading,
    };
}

type Actions = IAllSitesRequestDataAction |
    IHeaderSetEntityTitleAction |
    IHeaderSetCommandsAction |
    IHeaderSetBreadcrumbAction;

function mapDispatchToProps(dispatch: ThunkDispatch<IAppState, void, Actions>): IAllSitesPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IHeaderBreadcrumbPayload): IHeaderSetBreadcrumbAction =>
            (dispatch(headerSetBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IHeaderEntityTitlePayload): IHeaderSetEntityTitleAction =>
            dispatch(headerSetEntityTitle(actionPayload)),
        setCommands: (actionPayload: IHeaderCommandButtonsPayload): IHeaderSetCommandsAction =>
            dispatch(headerSetCommands(actionPayload)),
        getData: (): void => { dispatch(allSitesGetData()); },
    };
}

const AllSitesContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )<IAllSitesProps>(AllSitesComponent)
);

export default AllSitesContainer;

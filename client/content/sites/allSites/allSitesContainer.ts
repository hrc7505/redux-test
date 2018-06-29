import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { createSelector, OutputSelector } from "reselect";

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
import ISiteData from "../data/duck/interfaces/ISiteData";
import ISiteDetailsListItemData from "../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";

type GetSiteIdsFromAllSitesState = (state: IAppState) => string[];
type GetSiteDataFromSitesDataState = (state: IAppState) => ISiteData;
type ResultFunction = (siteIds: string[], siteData: ISiteData) => ISiteDetailsListItemData[];

const getSiteIds: GetSiteIdsFromAllSitesState = (state: IAppState): string[] => state.sitesState.allSitesState.sites;
const getSiteData: GetSiteDataFromSitesDataState =
    (state: IAppState): ISiteData => state.sitesState.sitesDataState.sites;

const getSitesDetailsListItems: OutputSelector<IAppState, ISiteDetailsListItemData[], ResultFunction> = createSelector(
    [getSiteIds, getSiteData],
    (siteIds: string[], siteData: ISiteData): ISiteDetailsListItemData[] => (
        siteIds.filter((id: string): boolean => !!siteData[id]) // Checking that data exists for the Site ID.
            .map((id: string) => ({ // Transforming the site data from the store into Detail List Items.
                id: siteData[id].id,
                name: siteData[id].name,
                location: siteData[id].street,
                activeJobs: siteData[id].activeJobs,
                totalJobs: siteData[id].totalJobs,
            }))
    )
);

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: getSitesDetailsListItems(state),
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

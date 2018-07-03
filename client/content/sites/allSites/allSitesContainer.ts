import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { createSelector, OutputSelector } from "reselect";

import AllSitesComponent from "../../sites/allSites/allSitesComponent";
import allSitesGetData from "./duck/operations/allSitesGetData";
import IAllSitesProps from "./interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAllSitesRequestDataAction from "./duck/actions/interfaces/IAllSitesRequestDataAction";
import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderBreadcrumbPayload from "../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import ISiteData from "../data/duck/interfaces/ISiteData";
import ISiteDetailsListItemData from "../../common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import setHeader from "../common/header/duck/operations/setHeader";

type GetSiteIdsFromAllSitesState = (state: IAppState) => string[];
type GetSiteDataFromSitesDataState = (state: IAppState) => ISiteData;
type ResultFunction = (siteIds: string[], siteData: ISiteData) => ISiteDetailsListItemData[];

const getSiteIds: GetSiteIdsFromAllSitesState = (state: IAppState): string[] => state.sitesState.allSitesState.sites;
const getSiteData: GetSiteDataFromSitesDataState =
    (state: IAppState): ISiteData => state.sitesState.sitesDataState.sites;

const getSitesDetailsListItems: OutputSelector<IAppState, ISiteDetailsListItemData[], ResultFunction> = createSelector(
    [getSiteIds, getSiteData],
    (siteIds: string[], siteData: ISiteData): ISiteDetailsListItemData[] => {
        if (!siteIds) {
            return null;
        }
        return siteIds.filter((id: string): boolean => !!siteData[id]) // Checking that data exists for the Site ID.
            .map((id: string) => ({ // Transforming the site data from the store into Detail List Items.
                id: siteData[id].id,
                name: siteData[id].name,
                location: siteData[id].street,
                activeJobs: siteData[id].activeJobs,
                totalJobs: siteData[id].totalJobs,
            }))
    }
);

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        detailsListItems: getSitesDetailsListItems(state),
        isLoading: state.sitesState.allSitesState.isLoading,
    };
}

type Actions = IAllSitesRequestDataAction;

function mapDispatchToProps(dispatch: ThunkDispatch<IAppState, void, Actions>): IAllSitesPropsFromDispatch {
    return {
        getData: (useShim: boolean): void => { dispatch(allSitesGetData(useShim)); },
        setHeader: (
            breadcrumbPayload: IHeaderBreadcrumbPayload,
            entityTitlePayload: IHeaderEntityTitlePayload,
            commandButtonsPayload: IHeaderCommandButtonsPayload
        ): void => { dispatch(setHeader(breadcrumbPayload, entityTitlePayload, commandButtonsPayload)); }
    };
}

const AllSitesContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )<IAllSitesProps>(AllSitesComponent)
);

export default AllSitesContainer;

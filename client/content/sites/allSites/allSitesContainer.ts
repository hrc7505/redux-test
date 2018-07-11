import { connect } from "react-redux";
import { withRouter } from "react-router";
import { ThunkDispatch } from "redux-thunk";
import { createSelector, OutputSelector } from "reselect";

import ISiteDetailsListItemData from "content/common/detailsList/siteDetailsList/ISiteDetailsListItemData";
import AllSitesComponent from "content/sites/allSites/allSitesComponent";
import IAllSitesRequestDataAction from "content/sites/allSites/duck/actions/interfaces/IAllSitesRequestDataAction";
import allSitesGetData from "content/sites/allSites/duck/operations/allSitesGetData";
import IAllSitesProps from "content/sites/allSites/interfaces/IAllSitesProps";
import IAllSitesPropsFromDispatch from "content/sites/allSites/interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "content/sites/allSites/interfaces/IAllSitesPropsFromState";
import headerSetHeader from "content/sites/common/header/duck/operations/headerSetHeader";
import IHeaderPayload from "content/sites/common/header/duck/operations/interfaces/IHeaderPayload";
import ISiteData from "content/sites/data/duck/interfaces/ISiteData";
import IAppState from "duck/interfaces/IAppState";

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
                location: `${siteData[id].street}, ${siteData[id].city}`,
                activeJobs: siteData[id].numberOfActiveJobs.toString(),
                totalJobs: siteData[id].numberOfTotalJobs.toString(),
            }));
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
        setHeader: (headerPayload: IHeaderPayload): void => { dispatch(headerSetHeader(headerPayload)); },
    };
}

const AllSitesContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )<IAllSitesProps>(AllSitesComponent)
);

export default AllSitesContainer;

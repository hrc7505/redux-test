import * as moment from "moment";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { createSelector, OutputSelector } from "reselect";

import headerSetHeader from "content/sites/common/header/duck/operations/headerSetHeader";
import IAppState from "duck/interfaces/IAppState";
import IHeaderPayload from "content/sites/common/header/duck/operations/interfaces/IHeaderPayload";
import IJobData from "content/sites/data/duck/interfaces/IJobData";
import IJobTileData from "content/common/jobSummaryList/interfaces/IJobTileData";
import ISiteData from "content/sites/data/duck/interfaces/ISiteData";
import ISiteDetailsProps from "content/sites/siteDetails/interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "content/sites/siteDetails/interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "content/sites/siteDetails/interfaces/ISiteDetailsPropsFromState";
import ISitesToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import SiteDetailsComponent from "content/sites/siteDetails/siteDetailsComponent";
import siteDetailsGetData from "content/sites/siteDetails/duck/operations/siteDetailsGetData";
import SiteDetailsShim from "content/sites/siteDetails/shim/siteDetailsShim";
import sitesToggleRightPane from "content/sites/duck/actions/sitesToggleRightPane";

type GetJobIdsFromSiteDetailsState = (state: IAppState) => string[];
type GetJobDataFromSitesDataState = (state: IAppState) => IJobData;
type GetSiteDataFromSitesDataState = (state: IAppState) => ISiteData;
type ResultFunction = (jobIds: string[], jobData: IJobData, siteData: ISiteData) => IJobTileData[];

const getJobIds: GetJobIdsFromSiteDetailsState =
    (state: IAppState): string[] => state.sitesState.siteDetailsState.jobs;
const getJobData: GetJobDataFromSitesDataState =
    (state: IAppState): IJobData => state.sitesState.sitesDataState.jobs;
const getSiteData: GetSiteDataFromSitesDataState =
    (state: IAppState): ISiteData => state.sitesState.sitesDataState.sites;

const getJobTileData: OutputSelector<IAppState, IJobTileData[], ResultFunction> = createSelector(
    [getJobIds, getJobData, getSiteData],
    (jobIds: string[], jobData: IJobData, siteData: ISiteData): IJobTileData[] => {
        if (!jobIds) {
            return null;
        }

        return jobIds.filter((id: string): boolean => !!jobData[id])
            .map((id: string) => ({
                id: jobData[id].number,
                title: jobData[id].name,
                site: siteData[jobData[id].siteId].name,
                createDate: moment(jobData[id].createdAt).format("MMMM D, YYYY"),
                status: jobData[id].status,
            }));
    }
);

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    return {
        isLoading: state.sitesState.siteDetailsState.isLoading,
        site: state.sitesState.sitesDataState.sites[state.sitesState.siteDetailsState.site]
            ? state.sitesState.sitesDataState.sites[state.sitesState.siteDetailsState.site]
            : SiteDetailsShim.getData(), // Using shim data as the default empty data set. Might want to rethink.
        jobs: getJobTileData(state),
        isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible,
        rightPaneId: state.sitesState.rightPaneState.rightPaneId,
    };
}

type Actions = ISitesToggleRightPaneAction;

function mapStateToDispatch(dispatch: ThunkDispatch<IAppState, void, Actions>): ISiteDetailsPropsFromDispatch {
    return {
        jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getData: (useShim: boolean, siteId: string): void => { dispatch(siteDetailsGetData(useShim, siteId)); },
        setHeader: (headerPayload: IHeaderPayload): void => { dispatch(headerSetHeader(headerPayload)); }
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<ISiteDetailsProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

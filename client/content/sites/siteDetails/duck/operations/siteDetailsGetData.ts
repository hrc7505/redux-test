import { Dispatch } from "redux";

import IJobModel from "../../../../../models/jobs/IJobModel";
import ISiteDetailsLoadDataAction from "../actions/interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsRequestDataAction from "../actions/interfaces/ISiteDetailsRequestDataAction";
import ISiteModel from "../../../../../models/sites/ISiteModel";
import ISitesCloseRightPaneAction from "../../../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesDataCreateUpdateJobsAction from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateJobsAction";
import ISitesDataCreateUpdateJobsPayload from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateJobsPayload";
import ISitesDataCreateUpdateSitesAction from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "../../../data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import RequestUtils from "../../../../../utils/requestUtils";
import siteDetailsLoadData from "../actions/siteDetailsLoadData";
import siteDetailsRequestData from "../actions/siteDetailsRequestData";
import sitesCloseRightPane from "../../../duck/actions/sitesCloseRightPane";
import sitesDataCreateUpdateJobs from "../../../data/duck/actions/sitesDataCreateUpdateJobs";
import sitesDataCreateUpdateSites from "../../../data/duck/actions/sitesDataCreateUpdateSites";
import UrlUtils from "../../../../../utils/urlUtils";

type Actions = ISitesDataCreateUpdateSitesAction |
    ISitesDataCreateUpdateJobsAction |
    ISiteDetailsLoadDataAction |
    ISiteDetailsRequestDataAction |
    ISitesCloseRightPaneAction;

type SiteDetailsGetData = (useShim: boolean, siteId: string) => ((dispatch: Dispatch<Actions>) => void);

const GetSiteUrl: string = UrlUtils.hostApi + "Site?id=";
const GetActiveUrlForSite: string = UrlUtils.hostApi + "Job/GetAllAsync?status=Active&siteid=";

const siteDetailsGetData: SiteDetailsGetData =
    (useShim: boolean, siteId: string): ((dispatch: Dispatch<Actions>) => void) => (
        async (dispatch: Dispatch<Actions>): Promise<void> => {
            dispatch(siteDetailsRequestData());
            dispatch(sitesCloseRightPane());
            try {
                const siteResult: ISiteModel = await RequestUtils.makeGetRequest<ISiteModel>(`${GetSiteUrl}${siteId}`);
                if (!siteResult) {
                    throw new Error("Result was null.");
                }

                const sitesDataPayload: ISitesDataCreateUpdateSitesPayload = {
                    sites: { }
                };
                sitesDataPayload.sites[siteResult.id] = siteResult;

                // Updating the Data State with the new information from the server.
                dispatch(sitesDataCreateUpdateSites(sitesDataPayload));

                const jobResult: IJobModel[] = await RequestUtils.makeGetRequest<IJobModel[]>(
                    GetActiveUrlForSite + encodeURIComponent(siteId)
                );
                if (!jobResult) {
                    throw new Error("Result was null.");
                }

                const jobsDataPayload: ISitesDataCreateUpdateJobsPayload = {
                    jobs: { }
                };
                jobResult.forEach((job: IJobModel) => {
                    jobsDataPayload.jobs[job.id] = job;
                });

                // Updating the Data State with all of the job information.
                dispatch(sitesDataCreateUpdateJobs(jobsDataPayload));

                // We only show 3 active jobs on the Site Details page.
                // Making the truncation for updating the Site Details State, but the job data is already in the
                // data store.
                const maxNumberOfActiveJobsToDisplay: number = 3;
                const activeJobIds: IJobModel[] = jobResult.slice(0, maxNumberOfActiveJobsToDisplay);
                dispatch(siteDetailsLoadData({
                    site: siteResult.id,
                    jobs: activeJobIds.map((job: IJobModel): string => (job.id)),
                }));
            } catch {
                dispatch(siteDetailsLoadData({
                    site: null,
                    jobs: [],
                }));
            }
        }
    );

export default siteDetailsGetData;

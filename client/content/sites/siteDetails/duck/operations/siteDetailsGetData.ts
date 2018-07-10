import { Dispatch } from "redux";

import ISitesDataCreateUpdateJobsAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsAction";
import ISitesDataCreateUpdateJobsPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateJobsPayload";
import ISitesDataCreateUpdateSitesAction from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesAction";
import ISitesDataCreateUpdateSitesPayload from "content/sites/data/duck/actions/interfaces/ISitesDataCreateUpdateSitesPayload";
import sitesDataCreateUpdateJobs from "content/sites/data/duck/actions/sitesDataCreateUpdateJobs";
import sitesDataCreateUpdateSites from "content/sites/data/duck/actions/sitesDataCreateUpdateSites";
import ISitesCloseRightPaneAction from "content/sites/duck/actions/interfaces/ISitesCloseRightPaneAction";
import sitesCloseRightPane from "content/sites/duck/actions/sitesCloseRightPane";
import ISiteDetailsLoadDataAction from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsLoadDataAction";
import ISiteDetailsRequestDataAction from "content/sites/siteDetails/duck/actions/interfaces/ISiteDetailsRequestDataAction";
import siteDetailsLoadData from "content/sites/siteDetails/duck/actions/siteDetailsLoadData";
import siteDetailsRequestData from "content/sites/siteDetails/duck/actions/siteDetailsRequestData";
import IJobModel from "models/jobs/IJobModel";
import ISiteModel from "models/sites/ISiteModel";
import RequestUtils from "utils/requestUtils";
import UrlUtils from "utils/urlUtils";

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

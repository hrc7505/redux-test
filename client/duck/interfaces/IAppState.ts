import IChromeState from "chrome/duck/interfaces/IChromeState";
import IDashboardState from "content/dashboard/duck/interfaces/IDashboardState";
import ISitesState from "content/sites/duck/interfaces/ISitesState";

export default interface IAppState {
    chromeState: IChromeState;
    dashboardState: IDashboardState;
    sitesState: ISitesState;
}

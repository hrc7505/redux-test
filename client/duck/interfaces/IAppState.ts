import IChromeState from "../../chrome/duck/interfaces/IChromeState";
import IContentState from "../../content/duck/interfaces/IContentState";
import IDashboardState from "../../content/dashboard/duck/interfaces/IDashboardState";

export default interface IAppState {
    chromeState: IChromeState;
    contentState: IContentState;
    dashboardState: IDashboardState;
}

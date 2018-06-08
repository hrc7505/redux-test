import IChromeState from "../../chrome/duck/interfaces/IChromeState";
import IContentState from "../../content/duck/interfaces/IContentState";

export default interface IAppState {
    chromeState: IChromeState;
    contentState: IContentState;
}

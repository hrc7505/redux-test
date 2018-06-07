import IChromeReducer from "./IChromeReducer";
import IContentReducer from "../../content/duck/interfaces/iContentReducer";

export default interface IAppReducer {
    chromeReducer: IChromeReducer;
    contentReducer: IContentReducer;
}

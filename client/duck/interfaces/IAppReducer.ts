import IChromeReducer from "./IChromeReducer";
import ICommandBarComponentProps from "../../content/body/site/header/command-bar/interfaces/iCommandBarComponentProps";
import IHeaderComponentProps from "../../content/body/site/header/interfaces/iHeaderComponentProps";
import IRightPaneComponentProps from "../../content/right-pane/interfaces/IRightPaneComponentProps";

export default interface IAppReducer {
    chromeReducer: IChromeReducer;
    rightPaneReducer: IRightPaneComponentProps;
    commandBarReducer: ICommandBarComponentProps;
    navigationReducer: IHeaderComponentProps;
}

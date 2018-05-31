import IChromeReducer from "./IChromeReducer";
import ICommandBarComponentProps from "../../content/header/command-bar/models/ICommandBarComponentProps";
import IHeaderComponentProps from "../../content/header/models/IHeaderComponentProps";
import IRightPaneComponentProps from "../../content/right-pane/models/IRightPaneComponentProps";

export default interface IAppReducer {
    chromeReducer: IChromeReducer;
    rightPaneReducer: IRightPaneComponentProps;
    commandBarReducer: ICommandBarComponentProps;
    navigationReducer: IHeaderComponentProps;
}

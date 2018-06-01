import IChromeReducer from "./IChromeReducer";
import ICommandBarComponentProps from "../../content/header/command-bar/interfaces/ICommandBarComponentProps";
import IHeaderComponentProps from "../../content/header/interfaces/IHeaderComponentProps";
import IRightPaneComponentProps from "../../content/right-pane/interfaces/IRightPaneComponentProps";

export default interface IAppReducer {
    chromeReducer: IChromeReducer;
    rightPaneReducer: IRightPaneComponentProps;
    commandBarReducer: ICommandBarComponentProps;
    navigationReducer: IHeaderComponentProps;
}

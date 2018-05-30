
import IOpenRightPanelAction from "../../../../duck/actions/models/IOpenRightPanelAction";
import IToggleRightPaneAction from "../../../duck/actions/models/IToggleRightPaneAction";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface ICommandBarComponentProps {
    commandBarReducer: { commandBarProps: ICommandBarProps };
    openRightPanel: (child: JSX.Element) => IOpenRightPanelAction;
    toggleRightPane: () => IToggleRightPaneAction;
}

import { connect, Dispatch } from "react-redux";

import CommandbarComponent from "./CommandbarComponent";
import ICloseRightPanelAction from "../../../../chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarComponentProps from "./interfaces/iCommandBarComponentProps";
import ICommandBarStateFromDispatch from "./interfaces/IcommandBarStateFromDispatch";
import IOpenRightPanelAction from "../../../../chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IRightPanelData from "../../../../chrome/right-panel/interfaces/IRightPanelData";
import IToggleRightPaneAction from "../../duck/actions/interfaces/IToggleRightPaneAction";
import openRightPanel from "../../../../chrome/duck/actions/openRightPanel";
import toggleRightPane from "../../duck/actions/ToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | IToggleRightPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ICommandBarStateFromDispatch {
    return {
        openRightPanel: (rightPanelData: IRightPanelData): IOpenRightPanelAction =>
            dispatch(openRightPanel(rightPanelData)),
        toggleRightPane: (rightPaneData: JSX.Element): IToggleRightPaneAction =>
            dispatch(toggleRightPane(rightPaneData))
    };
}

const CommandBarContainer: React.ComponentClass<ICommandBarComponentProps> = connect(
    null,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

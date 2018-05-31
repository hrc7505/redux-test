import { connect, Dispatch } from "react-redux";

import CommandbarComponent from "./CommandbarComponent";
import ICloseRightPanelAction from "../../../duck/actions/models/ICloseRightPanelAction";
import ICommandBarComponentProps from "./models/ICommandBarComponentProps";
import IOpenRightPanelAction from "../../../duck/actions/models/IOpenRightPanelAction";
import IToggleRightPaneAction from "../../duck/actions/models/IToggleRightPaneAction";
import openRightPanel from "../../../duck/actions/OpenRightPanel";
import toggleRightPane from "../../duck/actions/ToggleRightPane";

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | IToggleRightPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ReturnType<typeof mapDispatchToProps> {
    return {
        openRightPanel: (child: JSX.Element): IOpenRightPanelAction => dispatch(openRightPanel(child)),
        toggleRightPane: (child: JSX.Element): IToggleRightPaneAction => dispatch(toggleRightPane(child))
    };
}

const CommandBarContainer: React.ComponentClass<ICommandBarComponentProps> = connect(
    null,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

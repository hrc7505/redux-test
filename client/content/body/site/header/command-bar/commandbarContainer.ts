import { connect, Dispatch } from "react-redux";

import CommandbarComponent from "./CommandbarComponent";
import ICloseRightPanelAction from "../../../../../chrome/duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarComponentProps from "./interfaces/iCommandBarComponentProps";
import IOpenRightPanelAction from "../../../../../chrome/duck/actions/interfaces/iOpenRightPanelAction";
import IToggleRightPaneAction from "../../../../duck/actions/interfaces/iToggleRightPaneAction";
import openRightPanel from "../../../../../chrome/duck/actions/openRightPanel";
import toggleRightPane from "../../../../duck/actions/toggleRightPane";

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

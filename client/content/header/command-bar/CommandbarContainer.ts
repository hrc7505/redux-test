import { connect, Dispatch } from "react-redux";

import closeRightPanel from "../../../duck/actions/CloseRightPanel";
import CommandbarComponent from "./CommandbarComponent";
import ICloseRightPanelAction from "../../../duck/actions/models/ICloseRightPanelAction";
import ICommandBarComponentProps from "./models/ICommandBarComponentProps";
import IOpenRightPanelAction from "../../../duck/actions/models/IOpenRightPanelAction";
import IToggleRightPaneAction from "../../duck/actions/models/IToggleRightPaneAction";
import openRightPanel from "../../../duck/actions/OpenRightPanel";
import toggleRightPane from "../../duck/actions/ToggleRightPane";

const mapStateToProps: (state: ICommandBarComponentProps) => ICommandBarComponentProps =
    (state: ICommandBarComponentProps): ICommandBarComponentProps => ({
        ...state
    });

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | IToggleRightPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ReturnType<typeof mapDispatchToProps> {
    return {
        closeRightPanel: (): ICloseRightPanelAction => dispatch(closeRightPanel()),
        openRightPanel: (child: JSX.Element): IOpenRightPanelAction => dispatch(openRightPanel(child)),
        toggleRightPane: (): IToggleRightPaneAction => dispatch(toggleRightPane())
    };
}

const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

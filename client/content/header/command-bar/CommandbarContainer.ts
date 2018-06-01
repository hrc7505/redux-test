import { connect, Dispatch } from "react-redux";

import closeLeftPane from "../../../duck/actions/CloseLeftPane";
import CommandbarComponent from "./CommandbarComponent";
import IAppReducer from "../../../duck/interfaces/IAppReducer";
import ICloseLeftPaneAction from "../../../duck/actions/interfaces/ICloseLeftPaneAction";
import ICloseRightPanelAction from "../../../duck/actions/interfaces/ICloseRightPanelAction";
import ICommandBarComponentProps from "./interfaces/ICommandBarComponentProps";
import IOpenRightPanelAction from "../../../duck/actions/interfaces/IOpenRightPanelAction";
import IToggleRightPaneAction from "../../duck/actions/interfaces/IToggleRightPaneAction";
import openRightPanel from "../../../duck/actions/OpenRightPanel";
import toggleRightPane from "../../duck/actions/ToggleRightPane";

function mapStateToProps(state: IAppReducer, ownProps: ICommandBarComponentProps): ICommandBarComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible,
        isRightPaneVisible: state.rightPaneReducer.isRightPaneVisible
    };
}

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction | IToggleRightPaneAction | ICloseLeftPaneAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ReturnType<typeof mapDispatchToProps> {
    return {
        openRightPanel: (child: JSX.Element): IOpenRightPanelAction => dispatch(openRightPanel(child)),
        toggleRightPane: (child: JSX.Element): IToggleRightPaneAction => dispatch(toggleRightPane(child)),
        closeLeftPane: (): ICloseLeftPaneAction => dispatch(closeLeftPane())
    };
}

const CommandBarContainer: React.ComponentClass<ICommandBarComponentProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

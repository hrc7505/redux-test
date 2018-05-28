import { connect, Dispatch } from "react-redux";

import { IRightPanelAction, toggleRightPanel } from "../../duck/Actions";
import RightPanelComponent, { IRightPanelProps } from "./RightPanelComponent";

const mapStateToProps: (state: IRightPanelProps) => IRightPanelProps = (state: IRightPanelProps): IRightPanelProps => ({
    ...state,
    isRightPanelVisible: state.isRightPanelVisible,
});

export const mapDispatchToProps = (dispatch: Dispatch<IRightPanelAction>) => ({
    showRightPanel: (): IRightPanelAction => dispatch(toggleRightPanel()),
});

const RightPanelContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IRightPanelProps>(RightPanelComponent);

export default RightPanelContainer;

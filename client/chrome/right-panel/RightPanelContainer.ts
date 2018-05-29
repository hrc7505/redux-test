import { connect, Dispatch } from "react-redux";

import { closeRightPanel, ICloseRightPanelAction } from "../../duck/Actions";
import RightPanelComponent, { IRightPanelProps } from "./RightPanelComponent";

const mapStateToProps: (state: IRightPanelProps) => IRightPanelProps = (state: IRightPanelProps): IRightPanelProps => ({
    ...state,
    childComponent: state.childComponent,
    isRightPanelVisible: state.isRightPanelVisible,
});

function mapDispatchToProps(dispatch: Dispatch<ICloseRightPanelAction>): ReturnType<typeof mapDispatchToProps> {
    return {
        closeRightPanel: (): ICloseRightPanelAction => dispatch(closeRightPanel())
    };
}

const RightPanelContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IRightPanelProps>(RightPanelComponent);

export default RightPanelContainer;

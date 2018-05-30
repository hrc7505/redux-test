import { connect, Dispatch } from "react-redux";

import closeRightPanel from "../../duck/actions/CloseRightPanel";
import ICloseRightPanelAction from "../../duck/actions/models/ICloseRightPanelAction";
import IRightPanelProps from "./models/IRightPanelProps";
import RightPanelComponent from "./RightPanelComponent";

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

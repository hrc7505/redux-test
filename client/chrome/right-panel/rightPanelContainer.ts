import { connect, Dispatch } from "react-redux";

import closeRightPanel from "../duck/actions/CloseRightPanel";
import IAppState from "../../duck/interfaces/IAppState";
import ICloseRightPanelAction from "../duck/actions/interfaces/ICloseRightPanelAction";
import IRightPanelProps from "./interfaces/IRightPanelProps";
import IRightPanelPropsFromDispatch from "./interfaces/IRightPanelPropsFromDispatch";
import IRightPanelPropsFromState from "./interfaces/IRightPanelPropsFromState";
import RightPanelComponent from "./RightPanelComponent";

function mapStateToProps(state: IAppState): IRightPanelPropsFromState {
    return {
        rightPanelProps: state.chromeState.rightPanelData,
        isRightPanelVisible: state.chromeState.isRightPanelVisible
    };
}

function mapDispatchToProps(dispatch: Dispatch<ICloseRightPanelAction>): IRightPanelPropsFromDispatch {
    return {
        closeRightPanel: (): ICloseRightPanelAction => dispatch(closeRightPanel())
    };
}

const RightPanelContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IRightPanelProps>(RightPanelComponent);

export default RightPanelContainer;

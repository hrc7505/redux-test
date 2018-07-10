import { connect } from "react-redux";
import { Dispatch } from "redux";

import closeRightPanel from "chrome/duck/actions/CloseRightPanel";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import IRightPanelProps from "chrome/rightPanel/interfaces/IRightPanelProps";
import IRightPanelPropsFromDispatch from "chrome/rightPanel/interfaces/IRightPanelPropsFromDispatch";
import IRightPanelPropsFromState from "chrome/rightPanel/interfaces/IRightPanelPropsFromState";
import RightPanelComponent from "chrome/rightPanel/RightPanelComponent";
import IAppState from "duck/interfaces/IAppState";

function mapStateToProps(state: IAppState): IRightPanelPropsFromState {
    return {
        isRightPanelVisible: state.chromeState.isRightPanelVisible,
        rightPanelHeaderText: state.chromeState.rightPanelData.rightPanelHeaderText,
        rightPanelContent: state.chromeState.rightPanelData.rightPanelContent,
        rightPanelFooterRender: state.chromeState.rightPanelData.rightPanelFooterRender
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

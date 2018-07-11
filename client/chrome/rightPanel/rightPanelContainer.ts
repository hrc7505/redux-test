import { connect } from "react-redux";
import { Dispatch } from "redux";

import closeRightPanel from "chrome/duck/actions/CloseRightPanel";
import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import IRightPanelProps from "chrome/rightPanel/interfaces/IRightPanelProps";
import IRightPanelPropsFromDispatch from "chrome/rightPanel/interfaces/IRightPanelPropsFromDispatch";
import IRightPanelPropsFromState from "chrome/rightPanel/interfaces/IRightPanelPropsFromState";
import RightPanelComponent from "chrome/rightPanel/RightPanelComponent";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState) => IRightPanelPropsFromState;

const mapStateToProps: MapStateToProps = (state: IAppState): IRightPanelPropsFromState => ({
    isRightPanelVisible: state.chromeState.isRightPanelVisible,
    rightPanelHeaderText: state.chromeState.rightPanelData.rightPanelHeaderText,
    rightPanelContent: state.chromeState.rightPanelData.rightPanelContent,
    rightPanelFooterRender: state.chromeState.rightPanelData.rightPanelFooterRender
});

type MapDispatchToProps = (dispatch: Dispatch<ICloseRightPanelAction>) => IRightPanelPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps =
    (dispatch: Dispatch<ICloseRightPanelAction>): IRightPanelPropsFromDispatch => ({
        closeRightPanel: (): ICloseRightPanelAction => dispatch(closeRightPanel())
    });

const RightPanelContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IRightPanelProps>(RightPanelComponent);

export default RightPanelContainer;

import { connect, Dispatch } from "react-redux";

import closeRightPanel from "../../duck/actions/CloseRightPanel";
import IAppReducer from "../../duck/models/IAppReducer";
import ICloseRightPanelAction from "../../duck/actions/models/ICloseRightPanelAction";
import IRightPanelProps from "./models/IRightPanelProps";
import RightPanelComponent from "./RightPanelComponent";

function mapStateToProps(state: IAppReducer): IRightPanelProps {
    return {
        childComponent: state.chromeReducer.childComponent,
        isRightPanelVisible: state.chromeReducer.isRightPanelVisible
    };
}

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

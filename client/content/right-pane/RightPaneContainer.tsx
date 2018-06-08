import { connect } from "react-redux";

import IAppState from "../../duck/interfaces/IAppState";
import IRightPaneComponentProps from "./interfaces/IRightPaneComponentProps";
import RightPaneComponent from "./RightPaneComponent";

function mapStateToProps(state: IAppState): IRightPaneComponentProps {
    return {
        isRightPaneVisible: state.contentState.rightPaneReducer.isRightPaneVisible,
        childComponent: state.contentState.rightPaneReducer.childComponent
    };
}

const RightPaneContainer: React.ComponentClass = connect(
    mapStateToProps
)<IRightPaneComponentProps>(RightPaneComponent);

export default RightPaneContainer;

import { connect } from "react-redux";

import IAppReducer from "../../duck/models/IAppReducer";
import IRightPaneComponentProps from "./models/IRightPaneComponentProps";
import RightPaneComponent from "./RightPaneComponent";

function mapStateToProps(state: IAppReducer): IRightPaneComponentProps {
    return {
        isRightPaneVisible: state.rightPaneReducer.isRightPaneVisible,
        childComponent: state.rightPaneReducer.childComponent
    };
}

const RightPaneContainer: React.ComponentClass = connect(
    mapStateToProps
)<IRightPaneComponentProps>(RightPaneComponent);

export default RightPaneContainer;

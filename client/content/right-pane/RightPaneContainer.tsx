import IRightPaneComponentProps from "./models/IRightPaneComponentProps";
import { connect } from "react-redux";
import RightPaneComponent from "./RightPaneComponent";

function mapStateToProps(state: IRightPaneComponentProps): IRightPaneComponentProps {
    return state;
}

const RightPaneContainer: React.ComponentClass = connect(
    mapStateToProps
)<IRightPaneComponentProps>(RightPaneComponent);

export default RightPaneContainer;

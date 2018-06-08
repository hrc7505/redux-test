import { connect } from "react-redux";

import IAppState from "../../duck/interfaces/IAppState";
import ILeftPaneProps from "./interfaces/ILeftPaneProps";
import LeftPaneComponent from "./LeftPaneComponent";

function mapStateToProps(state: IAppState): ILeftPaneProps {
    return {
        isLeftPaneVisible: state.chromeState.isLeftPaneVisible,
        isStandAlone: state.chromeState.isStandAlone
    };
}

const LeftPaneContainer: React.ComponentClass = connect(
    mapStateToProps
)<ILeftPaneProps>(LeftPaneComponent);

export default LeftPaneContainer;

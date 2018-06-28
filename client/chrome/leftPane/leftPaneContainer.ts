import { connect } from "react-redux";
import { withRouter } from "react-router";

import IAppState from "../../duck/interfaces/IAppState";
import ILeftPaneProps from "./interfaces/ILeftPaneProps";
import LeftPaneComponent from "./LeftPaneComponent";

function mapStateToProps(state: IAppState, ownProps: ILeftPaneProps): ILeftPaneProps {
    return {
        ...ownProps,
        isLeftPaneVisible: state.chromeState.isLeftPaneVisible
    };
}

const LeftPaneContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<ILeftPaneProps>(LeftPaneComponent)
);

export default LeftPaneContainer;

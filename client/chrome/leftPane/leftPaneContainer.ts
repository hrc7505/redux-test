import { connect } from "react-redux";
import { withRouter } from "react-router";

import IAppState from "duck/interfaces/IAppState";
import ILeftPaneProps from "chrome/leftPane/interfaces/ILeftPaneProps";
import LeftPaneComponent from "chrome/leftPane/LeftPaneComponent";

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

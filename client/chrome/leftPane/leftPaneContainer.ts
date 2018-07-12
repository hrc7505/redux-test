import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";

import ILeftPanePropsFromState from "chrome/leftPane/interfaces/ILeftPanePropsFromState";
import LeftPaneComponent from "chrome/leftPane/LeftPaneComponent";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>) => ILeftPanePropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: RouteComponentProps<string>): ILeftPanePropsFromState => ({
        isLeftPaneVisible: state.chromeState.isLeftPaneVisible
});

const LeftPaneContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<ILeftPanePropsFromState>(LeftPaneComponent)
);

export default LeftPaneContainer;

import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";

import ILeftPaneProps from "chrome/leftPane/interfaces/ILeftPaneProps";
import LeftPaneComponent from "chrome/leftPane/LeftPaneComponent";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>) => ILeftPaneProps;

const mapStateToProps: MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>): ILeftPaneProps => ({
    ...ownProps,
    isLeftPaneVisible: state.chromeState.isLeftPaneVisible
});

const LeftPaneContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<ILeftPaneProps>(LeftPaneComponent)
);

export default LeftPaneContainer;

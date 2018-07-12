import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import ContentComponent from "content/contentComponent";
import IContentComponentPropsFromState from "content/interfaces/IContentComponentPropsFromState";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>) => IContentComponentPropsFromState;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: RouteComponentProps<string>): IContentComponentPropsFromState => ({
        isLeftMenuVisible: state.chromeState.isLeftPaneVisible
    });

const contentContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IContentComponentPropsFromState>(ContentComponent)
);

export default contentContainer;

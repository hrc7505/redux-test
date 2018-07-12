import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import ContentComponent from "content/contentComponent";
import IContentComponentProps from "content/interfaces/IContentComponentProps";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState, ownProps: RouteComponentProps<string>) => IContentComponentProps;

const mapStateToProps: MapStateToProps =
    (state: IAppState, ownProps: RouteComponentProps<string>): IContentComponentProps => ({
        ...ownProps,
        isLeftMenuVisible: state.chromeState.isLeftPaneVisible
    });

const contentContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IContentComponentProps>(ContentComponent)
);

export default contentContainer;

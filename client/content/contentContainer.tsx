import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ContentComponent from "content/contentComponent";
import IContentComponentProps from "content/interfaces/IContentComponentProps";
import IAppState from "duck/interfaces/IAppState";

function mapStateToProps(state: IAppState, ownProps: IContentComponentProps): IContentComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeState.isLeftPaneVisible
    };
}

const contentContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IContentComponentProps>(ContentComponent)
);

export default contentContainer;

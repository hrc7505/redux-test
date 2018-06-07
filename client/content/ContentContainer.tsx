import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ContentComponent from "./contentComponent";
import IAppReducer from "../duck/interfaces/IAppReducer";
import IContentComponentProps from "./interfaces/IContentComponentProps";

function mapStateToProps(state: IAppReducer, ownProps: IContentComponentProps): IContentComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible
    };
}

const contentContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IContentComponentProps>(ContentComponent)
);

export default contentContainer;

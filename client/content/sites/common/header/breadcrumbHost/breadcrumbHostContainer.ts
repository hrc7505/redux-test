import { connect } from "react-redux";
import { withRouter } from "react-router";

import BreadcrumbHostComponent from "content/sites/common/header/breadcrumbHost/breadcrumbHostComponent";
import IBreadcrumbHostProps from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbHostProps";
import IBreadcrumbPropsFromState from "content/sites/common/header/breadcrumbHost/interfaces/IBreadcrumbPropsFromState";
import IAppState from "duck/interfaces/IAppState";

function mapStateToProps(state: IAppState): IBreadcrumbPropsFromState {
    return {
        locationPath: state.sitesState.headerState.breadcrumbPath
    };
}

const BreadcrumbHostContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IBreadcrumbHostProps>(BreadcrumbHostComponent)
);

export default BreadcrumbHostContainer;

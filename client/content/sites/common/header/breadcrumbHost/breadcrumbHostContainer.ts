import { connect } from "react-redux";
import { withRouter } from "react-router";

import BreadcrumbHostComponent from "./breadcrumbHostComponent";
import IAppState from "../../../../../duck/interfaces/IAppState";
import IBreadcrumbHostProps from "./interfaces/IBreadcrumbHostProps";
import IBreadcrumbPropsFromState from "./interfaces/IBreadcrumbPropsFromState";

function mapStateToProps(state: IAppState): IBreadcrumbPropsFromState {
    return {
        link: state.sitesState.headerState.breadcrumb.link,
        displayTitle: state.sitesState.headerState.breadcrumb.displayTitle,
        entity: state.sitesState.headerState.breadcrumb.entity
    };
}

const BreadcrumbHostContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IBreadcrumbHostProps>(BreadcrumbHostComponent)
);

export default BreadcrumbHostContainer;

import { connect } from "react-redux";
import { withRouter } from "react-router";

import BreadcrumbHostComponent from "./breadcrumbHostComponent";
import IAppState from "../../../../../duck/interfaces/IAppState";
import IBreadcrumbHostProps from "./interfaces/IBreadcrumbHostProps";
import IBreadcrumbHostPropsFromState from "./interfaces/IBreadcrumbHostPropsFromState";

function mapStateToProps(state: IAppState): IBreadcrumbHostPropsFromState {
    return {
        ...state.sitesState.headerState.breadcrumb
    };
}

const BreadcrumbHostContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<IBreadcrumbHostProps>(BreadcrumbHostComponent)
);

export default BreadcrumbHostContainer;

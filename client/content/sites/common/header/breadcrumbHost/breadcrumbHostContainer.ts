import { IBreadcrumbProps } from "office-ui-fabric-react/lib/Breadcrumb";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import BreadcrumbHostComponent from "./breadcrumbHostComponent";
import IAppState from "../../../../../duck/interfaces/IAppState";
import IBreadcrumbHostProps from "./interfaces/IBreadcrumbHostProps";

function mapStateToProps(state: IAppState): IBreadcrumbProps {
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

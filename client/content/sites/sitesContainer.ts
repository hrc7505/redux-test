import { connect } from "react-redux";
import { withRouter } from "react-router";

import IAppState from "duck/interfaces/IAppState";
import ISitesProps from "content/sites/interfaces/ISitesProps";
import ISitesPropsFromState from "content/sites/interfaces/ISitesPropsFromState";
import SitesComponent from "content/sites/sitesComponent";

function mapStateToProps(state: IAppState): ISitesPropsFromState {
    return {
        rightPaneProps: {
            isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible,
            rightPaneHeaderText: state.sitesState.rightPaneState.rightPaneHeaderText,
            rightPaneContent: state.sitesState.rightPaneState.rightPaneContent,
            rightPaneFooterRender: state.sitesState.rightPaneState.rightPaneFooterRender
                ? state.sitesState.rightPaneState.rightPaneFooterRender
                : null
        }
    };
}

const SitesContainer: React.ComponentClass = withRouter(
    connect(
        mapStateToProps
    )<ISitesProps>(SitesComponent)
);

export default SitesContainer;

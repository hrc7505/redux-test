import { connect } from "react-redux";

import IAppState from "../../duck/interfaces/IAppState";
import ISitesProps from "./interfaces/ISitesProps";
import ISitesPropsFromState from "./interfaces/ISitesPropsFromState";
import SitesComponent from "./sitesComponent";

function mapStateToProps(state: IAppState): ISitesPropsFromState {
    return {
        rightPaneProps: {
            ...state.sitesState.rightPaneState.rightPaneData,
            isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible,
        },
        headerData: state.sitesState.headerState
    };
}

const SitesContainer: React.ComponentClass = connect(
    mapStateToProps
)<ISitesProps>(SitesComponent);

export default SitesContainer;

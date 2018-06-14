import { connect, Dispatch } from "react-redux";

import getSitePageContents from "./duck/actions/getSitePageContents";
import IAppState from "../../duck/interfaces/IAppState";
import IGetSitesPageContentsAction from "./duck/actions/interfaces/IGetSitesPageContentsAction";
import ISitesComponentProps from "./interfaces/ISitesComponentProps";
import ISitesPropsFromDispatch from "./interfaces/ISitesPropsFromDispatch";
import ISitesPropsFromState from "./interfaces/ISitesPropsFromState";
import SitesComponent from "./sitesComponent";

function mapStateToProps(state: IAppState): ISitesPropsFromState {
    return {
        rightPaneProps: {
            ...state.contentState.sitesState.rightPaneData,
            isRightPaneVisible: state.contentState.sitesState.isRightPaneVisible
        },
        headerData: state.contentState.sitesState.headerData
    };
}

function mapDispatchToProps(dispatch: Dispatch<IGetSitesPageContentsAction>): ISitesPropsFromDispatch {
    return {
        getPageData: (): IGetSitesPageContentsAction => dispatch(getSitePageContents())
    };
}

const SitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ISitesComponentProps>(SitesComponent);

export default SitesContainer;

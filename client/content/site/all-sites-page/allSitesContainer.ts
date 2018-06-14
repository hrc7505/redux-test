import { connect, Dispatch } from "react-redux";

import AllSitesComponent from "./allSitesComponent";
import getSitePageContents from "../duck/actions/getSitePageContents";
import IAllSitesComponentProps from "./interfaces/IAllSitesComponentProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetSitesPageContentsAction from "../duck/actions/interfaces/IGetSitesPageContentsAction";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    return {
        rightPaneProps: {
            ...state.sitesState.rightPaneData,
            isRightPaneVisible: state.sitesState.isRightPaneVisible
        },
        headerData: state.sitesState.headerData
    };
}

function mapDispatchToProps(dispatch: Dispatch<IGetSitesPageContentsAction>): IAllSitesPropsFromDispatch {
    return {
        getPageData: (): IGetSitesPageContentsAction => dispatch(getSitePageContents())
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesComponentProps>(AllSitesComponent);

export default AllSitesContainer;

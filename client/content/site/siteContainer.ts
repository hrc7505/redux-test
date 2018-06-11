import { connect, Dispatch } from "react-redux";

import getSitePageContents from "./duck/actions/getSitePageContents";
import IAppState from "../../duck/interfaces/IAppState";
import IGetSitePageContentsAction from "./duck/actions/interfaces/iGetSitePageContentsAction";
import ISiteComponentProps from "./interfaces/ISiteComponentProps";
import ISitePropsFromDispatch from "./interfaces/ISitePropsFromDispatch";
import ISitePropsFromState from "./interfaces/ISitePropsFromState";
import SiteComponent from "./SiteComponent";

function mapStateToProps(state: IAppState): ISitePropsFromState {
    return {
        isRightPaneVisible: state.contentState.siteState.isRightPaneVisible,
        rightPaneData: state.contentState.siteState.rightPaneData,
        headerData: state.contentState.siteState.headerData
    };
}

function mapDispatchToProps(dispatch: Dispatch<IGetSitePageContentsAction>): ISitePropsFromDispatch {
    return {
        getPageData: (): IGetSitePageContentsAction => dispatch(getSitePageContents())
    };
}

const SiteContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ISiteComponentProps>(SiteComponent);

export default SiteContainer;

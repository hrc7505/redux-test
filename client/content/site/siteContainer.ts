import { connect, Dispatch } from "react-redux";

import getSitePageContents from "./duck/actions/getSitePageContents";
import IAppState from "../../duck/interfaces/IAppState";
import IGetSitePageContentsAction from "./duck/actions/interfaces/iGetSitePageContentsAction";
import ISitePropsFromDispatch from "./interfaces/ISitePropsFromDispatch";
import ISiteState from "./interfaces/ISiteState";
import SiteComponent from "./SiteComponent";

function mapStateToProps(state: IAppState): ISiteState {
    return {
        isRightPaneVisible: state.contentState.siteState.isRightPaneVisible,
        rightPaneData: state.contentState.siteState.rightPaneData,
        isLeftMenuVisible: !state.contentState.siteState.isStandAlone
            ? state.chromeState.isLeftPaneVisible
            : null,
        headerData: state.contentState.siteState.headerData,
        isStandAlone: state.contentState.siteState.isStandAlone
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
)<ISiteState>(SiteComponent);

export default SiteContainer;

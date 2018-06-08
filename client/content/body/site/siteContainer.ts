import { connect, Dispatch } from "react-redux";

import getSitePageContents from "./duck/actions/getSitePageContents";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetSitePageContentsAction from "./duck/actions/interfaces/iGetSitePageContentsAction";
import ISiteState from "./interfaces/ISiteState";
import SiteComponent from "./SiteComponent";

function mapStateToProps(state: IAppState, ownProps: ISiteState): ISiteState {
    return {
        ...ownProps,
        isRightPaneVisible: state.contentState.rightPaneReducer.isRightPaneVisible,
        isLeftMenuVisible: state.chromeState.isLeftPaneVisible,
        headerData: state.contentState.siteReducer.headerData
    };
}

function mapDispatchToProps(dispatch: Dispatch<IGetSitePageContentsAction>): ReturnType<typeof mapDispatchToProps> {
    return {
        getPageData: (): IGetSitePageContentsAction => dispatch(getSitePageContents())
    };
}

const SiteContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ISiteState>(SiteComponent);

export default SiteContainer;

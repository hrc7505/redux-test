import { connect, Dispatch } from "react-redux";

import getSitePageContents from "./duck/actions/getSitePageContents";
import IAppReducer from "../../../duck/interfaces/IAppReducer";
import IGetSitePageContentsAction from "./duck/actions/interfaces/iGetSitePageContentsAction";
import ISiteComponentProps from "./interfaces/iSiteComponentProps";
import SiteComponent from "./SiteComponent";

function mapStateToProps(state: IAppReducer, ownProps: ISiteComponentProps): ISiteComponentProps {
    return {
        ...ownProps,
        isRightPaneVisible: state.contentReducer.rightPaneReducer.isRightPaneVisible,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible,
        headerData: state.contentReducer.siteReducer.headerData
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
)<ISiteComponentProps>(SiteComponent);

export default SiteContainer;

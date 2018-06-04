import { connect } from "react-redux";

import IAppReducer from "../../../duck/interfaces/IAppReducer";
import ISiteComponentProps from "./interfaces/iSiteComponentProps";

import SiteComponent from "./SiteComponent";

function mapStateToProps(state: IAppReducer): ISiteComponentProps {
    return {
        isRightPaneVisible: state.rightPaneReducer.isRightPaneVisible,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible
    };
}

const SiteContainer: React.ComponentClass = connect(
    mapStateToProps
)<ISiteComponentProps>(SiteComponent);

export default SiteContainer;

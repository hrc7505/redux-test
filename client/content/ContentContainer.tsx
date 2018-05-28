import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import { IToggleMenu } from "../chrome/top-bar/TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const ContentContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(ContentComponent);
export default ContentContainer;

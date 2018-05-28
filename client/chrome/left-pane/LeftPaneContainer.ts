import { connect } from "react-redux";

import LeftPaneComponent from "./LeftPaneComponent";
import { IToggleMenu } from "../top-bar/TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const LeftPaneContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(LeftPaneComponent);

export default LeftPaneContainer;

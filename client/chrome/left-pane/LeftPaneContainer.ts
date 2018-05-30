import { connect } from "react-redux";

import IToggleMenu from "../top-bar/models/IToggleMenu";
import LeftPaneComponent from "./LeftPaneComponent";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const LeftPaneContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(LeftPaneComponent);

export default LeftPaneContainer;

import { connect } from "react-redux";

import App from "./App";
import { IToggleMenu } from "./header/top-bar/duck/State";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const LeftPaneContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(App);

export default LeftPaneContainer;

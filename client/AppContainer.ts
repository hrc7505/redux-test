import { connect } from "react-redux";

import AppComponent from "./AppComponent";
import { IToggleMenu } from "./duck/State";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const AppContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(AppComponent);

export default AppContainer;

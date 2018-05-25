import { connect } from "react-redux";

import Header from "./Header";
import { IToggleMenu } from "../../duck/State";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const HeaderContainer: React.ComponentClass = connect(mapStateToProps)<IToggleMenu>(Header);
export default HeaderContainer;

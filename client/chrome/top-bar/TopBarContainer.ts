import { connect, Dispatch } from "react-redux";

import { IToggleMenuAction, toggleMenu } from "../../duck/Actions";
import TopBar, { IToggleMenu } from "./TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible,
});

const mapDispatchToProps = (dispatch: Dispatch<IToggleMenuAction>) => ({
    toggleMenu: (): IToggleMenuAction => dispatch(toggleMenu()),
});

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IToggleMenu>(TopBar);

export default TopBarContainer;

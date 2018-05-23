import { connect, Dispatch } from "react-redux";

import { IToggleMenuAction, toggleMenu } from "./actions";
import { IToggleMenu } from "./State";
import TopBar from "../TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isShowMenu: state.isShowMenu
});

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    (dispatch: Dispatch<IToggleMenuAction>) => ({
        toggleMenu: (toggle: IToggleMenu): IToggleMenuAction => dispatch(toggleMenu(toggle)),
    })
)<IToggleMenu>(TopBar);

export default TopBarContainer;

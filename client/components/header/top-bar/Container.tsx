import { connect, Dispatch } from "react-redux";

import { IToggleMenuAction, toggleMenu } from "./actions";
import App from "../../App";
import { IToggleMenu } from "./State";
import TopBar from "./TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isShowMenu: state.isShowMenu
});

const ConnectedCompo: any  = connect(
        mapStateToProps,
        (dispatch: Dispatch<IToggleMenuAction>) => ({
            toggleMenu: (toggle: IToggleMenu): IToggleMenuAction => dispatch(toggleMenu(toggle)),
        })
    );

export const ConnectedTopBar = ConnectedCompo(TopBar);
export const ConnectedApp = ConnectedCompo(App);

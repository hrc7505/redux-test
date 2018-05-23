import { IToggleMenu } from "./State";

import { TOGGLE_MENU } from "./actionTypes";

export interface IToggleMenuAction extends IToggleMenu {
    type: TOGGLE_MENU;
}

export const toggleMenu: (newState: IToggleMenu) => IToggleMenuAction = (newState: IToggleMenu): IToggleMenuAction => ({
    isShowMenu: newState.isShowMenu,
    type: TOGGLE_MENU
});

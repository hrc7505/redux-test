import { TOGGLE_MENU } from "./actionTypes";

export interface IToggleMenuAction {
    type: TOGGLE_MENU;
}

export const toggleMenu: () => IToggleMenuAction = (): IToggleMenuAction => ({
    type: TOGGLE_MENU
});

import { TOGGLE_MENU } from "./actionTypes";
import { TOGGLE_RIGHT_PANEL } from "./ActionTypes";

export interface IToggleMenuAction {
    type: TOGGLE_MENU;
}

export interface IRightPanelAction {
    type: TOGGLE_RIGHT_PANEL;
}

export const toggleMenu: () => IToggleMenuAction = (): IToggleMenuAction => ({
    type: TOGGLE_MENU
});

export const toggleRightPanel: () => IRightPanelAction = (): IRightPanelAction => ({
    type: TOGGLE_RIGHT_PANEL
});

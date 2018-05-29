import * as ActionTypes from "./ActionTypes";

export interface IToggleMenuAction {
    type: ActionTypes.TOGGLE_MENU;
}

export interface IOpenRightPanelAction {
    childComponent: JSX.Element;
    type: ActionTypes.OPEN_RIGHT_PANEL;
}

export interface ICloseRightPanelAction {
    type: ActionTypes.CLOSE_RIGHT_PANEL;
}

export const toggleMenu: () => IToggleMenuAction = (): IToggleMenuAction => ({
    type: ActionTypes.TOGGLE_MENU
});

export const openRightPanel: (childComponent: JSX.Element) => IOpenRightPanelAction =
    (childComponent: JSX.Element): IOpenRightPanelAction => ({
        childComponent,
        type: ActionTypes.OPEN_RIGHT_PANEL,
    });

export const closeRightPanel: () => ICloseRightPanelAction = (): ICloseRightPanelAction => ({
    type: ActionTypes.CLOSE_RIGHT_PANEL
});

import { IToggleMenuAction } from "./actions";
import { TOGGLE_MENU } from "./actionTypes";
import { defaultState, IToggleMenu } from "./State";

const toggleMenu: (state: IToggleMenu, action: IToggleMenuAction) => IToggleMenu =
    (state: IToggleMenu, action: IToggleMenuAction): IToggleMenu => {

        switch (action.type) {
            case TOGGLE_MENU:
                return { isShowMenu: !state.isShowMenu };

            default:
                return state || defaultState;
        }
    };

export default toggleMenu;

import IToggleMenuAction from "./models/IToggleMenuAction";
import TOGGLE_MENU from "../action-types/TOGGLE_MENU";

const toggleMenu: () => IToggleMenuAction = (): IToggleMenuAction => ({
    type: TOGGLE_MENU
});

export default toggleMenu;

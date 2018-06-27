import ButtonType from "./enums/buttonType";
import IOpenRightPanelPayload from "../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "./enums/itemLocation";
import IToggleSwitchRightPanePayload from "../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ICommandButton {
    id: ButtonType;
    name: string;
    itemLocation: ItemLocation;
    actionPayload: IOpenRightPanelPayload | IToggleSwitchRightPanePayload;
}

import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";

export default interface ICommandButton {
    id: ButtonType;
    name: string;
    itemLocation: ItemLocation;
    actionPayload: IOpenRightPanelPayload | IToggleSwitchRightPanePayload;
}

import ButtonType from "content/sites/common/header/commandBarButtons/enums/buttonType";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import ItemLocation from "content/sites/common/header/commandBarButtons/enums/itemLocation";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ICommandButton {
    id: ButtonType;
    name: string;
    itemLocation: ItemLocation;
    actionPayload: IOpenRightPanelPayload | IToggleSwitchRightPanePayload;
}

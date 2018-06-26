
import IOpenRightPanelPayload from "../../../../../../../chrome/duck/actions/interfaces/IOpenRightPanelPayload";

import ButtonType from "../../../buttons/buttonType";
import ItemLocation from "../../../buttons/itemLocation";
import IToggleSwitchRightPanePayload from "../../../../../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface ICommandButton {
    id: ButtonType;
    name: string;
    itemLocation: ItemLocation;
    actionPayload: IOpenRightPanelPayload | IToggleSwitchRightPanePayload;
}

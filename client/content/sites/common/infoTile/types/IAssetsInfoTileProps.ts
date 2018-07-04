import IInfoTileDetails from "../interfaces/IInfoTileDetails";
import IInfoTileProps from "../interfaces/IInfoTileProps";

export default class IAssetInfoTileProps implements IInfoTileProps {
    public infoTileTitle: string;
    public infoTileIcon: string;
    public infoTileDetailsList: IInfoTileDetails[];

    constructor(unitCount: number, pipingCount: number) {
        this.infoTileTitle = "assets";
        this.infoTileIcon = "icon";
        this.infoTileDetailsList = [
            {
                field: "unit",
                value: unitCount,
            },
            {
                field: "piping",
                value: pipingCount,
            },
        ];
    }
}

import IInfoTileDetails from "content/sites/common/infoTile/interfaces/IInfoTileDetails";
import IInfoTileProps from "content/sites/common/infoTile/interfaces/IInfoTileProps";

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

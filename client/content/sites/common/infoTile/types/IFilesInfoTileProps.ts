import IInfoTileDetails from "content/sites/common/infoTile/interfaces/IInfoTileDetails";
import IInfoTileProps from "content/sites/common/infoTile/interfaces/IInfoTileProps";

export default class IFilesInfoTileProps implements IInfoTileProps {
    public infoTileTitle: string;
    public infoTileIcon: string;
    public infoTileDetailsList: IInfoTileDetails[];

    constructor(filesCount: number) {
        this.infoTileTitle = "jobs";
        this.infoTileIcon = "icon";
        this.infoTileDetailsList = [
            {
                field: "files",
                value: filesCount,
            },
        ];
    }
}

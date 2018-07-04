import IInfoTileDetails from "../interfaces/IInfoTileDetails";
import IInfoTileProps from "../interfaces/IInfoTileProps";

export default class IJobsInfoTileProps implements IInfoTileProps {
    public infoTileTitle: string;
    public infoTileIcon: string;
    public infoTileDetailsList: IInfoTileDetails[];

    constructor(activeCount: number, completedCount: number, archivedCount: number) {
        this.infoTileTitle = "jobs";
        this.infoTileIcon = "icon";
        this.infoTileDetailsList = [
            {
                field: "active",
                value: activeCount,
            },
            {
                field: "completed",
                value: completedCount,
            },
            {
                field: "archived",
                value: archivedCount,
            },
        ];
    }
}

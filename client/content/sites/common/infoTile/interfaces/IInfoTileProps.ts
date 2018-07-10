import IInfoTileDetails from "content/sites/common/infoTile/interfaces/IInfoTileDetails";

export default interface IInfoTileProps {
    infoTileTitle: string;
    infoTileIcon: string;
    infoTileDetailsList: IInfoTileDetails[];
}

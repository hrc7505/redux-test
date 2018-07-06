import ICommandButton from "../../../commandBarButtons/ICommandButton";

export default interface IHeaderPayload {
    locationPath: string;
    entityTitle: string;
    commands?: ICommandButton[];
}

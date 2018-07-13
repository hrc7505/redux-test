import ICommandButton from "content/sites/common/header/commandBarButtons/interfaces/ICommandButton";

export default interface IHeaderPayload {
    locationPath: string;
    entityTitle: string;
    commands?: ICommandButton[];
}

import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";

export default interface IHeaderPayload {
    locationPath: string;
    entityTitle: string;
    commands?: ICommandButton[];
}

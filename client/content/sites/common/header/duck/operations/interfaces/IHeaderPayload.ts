import HeaderFor from "../enums/headerFor";

export default interface IHeaderPayload {
    headerFor: HeaderFor;
    locationPath: string;
    entityTitle: string;
    isUpdateCommands?: boolean;
}

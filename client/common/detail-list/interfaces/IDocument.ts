export default interface IDocument {
    [key: string]: any;
    name: string;
    value: string;
    iconName: string;
    modifiedBy: string;
    dateModified: string;
    dateModifiedValue: number;
    fileSize: string;
    fileSizeRaw: number;
}

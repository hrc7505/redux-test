import ICommandButton from "../../commandBarButtons/ICommandButton";

export default interface IHeaderState {
    breadcrumbPath: string;
    title: string;
    commands: ICommandButton[];
}

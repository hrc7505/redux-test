import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";

export default interface IHeaderState {
    breadcrumbPath: string;
    title: string;
    commands: ICommandButton[];
}

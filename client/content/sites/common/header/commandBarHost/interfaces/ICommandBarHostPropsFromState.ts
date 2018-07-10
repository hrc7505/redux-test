import ICommandButton from "content/sites/common/header/commandBarButtons/ICommandButton";

export default interface ICommandBarHostPropsFromState {
    buttonList: ICommandButton[];
    isStandAlone: boolean;
}

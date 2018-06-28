import ICommandButton from "../../commandBarButtons/ICommandButton";

export default interface ICommandBarHostPropsFromState {
    buttonList: ICommandButton[];
    isStandAlone: boolean;
}

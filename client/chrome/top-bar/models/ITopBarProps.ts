import IToggleMenu from "./IToggleMenu";

export default interface ITopBarProps extends IToggleMenu {
    toggleMenu?: () => void;
}

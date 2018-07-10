import ITopBarPropsFromDispatch from "chrome/topBar/interfaces/ITopBarPropsFromDispatch";
import ITopBarPropsFromState from "chrome/topBar/interfaces/ITopBarPropsFromState";

export default interface ITopBarProps
    extends ITopBarPropsFromDispatch, ITopBarPropsFromState {
}

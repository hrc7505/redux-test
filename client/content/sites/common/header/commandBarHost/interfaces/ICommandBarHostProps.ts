import ICommandBarHostPropsFromDispatch from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromDispatch";
import ICommandBarHostPropsFromState from "content/sites/common/header/commandBarHost/interfaces/ICommandBarHostPropsFromState";

export default interface ICommandBarHostProps
    extends ICommandBarHostPropsFromDispatch, ICommandBarHostPropsFromState { }

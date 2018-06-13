import ICommandBarStateFromDispatch from "./ICommandBarStateFromDispatch";
import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface ICommandBarComponentProps
    extends ICommandBarStateFromDispatch, ICommandBarProps { }

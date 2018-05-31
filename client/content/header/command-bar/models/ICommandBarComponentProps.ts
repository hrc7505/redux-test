import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface ICommandBarComponentProps extends ICommandBarProps {
    openRightPanel?: (child: JSX.Element) => void;
    toggleRightPane?: (child: JSX.Element) => void;
}

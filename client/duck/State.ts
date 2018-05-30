import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";

export default interface IAppState {
    isLeftMenuVisible: boolean;
    isRightPanelVisible: boolean;
    isRightPaneVisible: boolean;
    commandBarProps: ICommandBarProps;
    childComponent: JSX.Element;
}

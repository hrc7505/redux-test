export default interface IRightPaneProps {
    isRightPaneVisible: boolean;
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

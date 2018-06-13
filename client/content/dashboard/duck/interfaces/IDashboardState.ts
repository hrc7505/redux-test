export default interface IDashboardState {
    isRightPaneVisible: boolean;
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

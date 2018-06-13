export default interface IDashboardToggleRightPanePayload {
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

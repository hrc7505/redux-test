export default interface ISiteToggleRightPanePayload {
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

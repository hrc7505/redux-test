export default interface ISitesToggleRightPanePayload {
    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

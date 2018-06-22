export default interface IOpenRightPanelPayload {
    rightPanelId: string;
    rightPanelHeaderText: string;
    rightPanelContent: JSX.Element;
    rightPanelFooterRender?: () => JSX.Element;
}

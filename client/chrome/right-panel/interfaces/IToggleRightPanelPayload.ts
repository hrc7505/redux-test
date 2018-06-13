export default interface IToggleRightPanelPayload {
    rightPanelHeaderText: string;
    rightPanelContent: JSX.Element;
    rightPanelFooterRender?: () => JSX.Element;
}

export default interface IRightPanelPropsFromState {
    isRightPanelVisible: boolean;
    rightPanelHeaderText: string;
    rightPanelContent: JSX.Element;
    rightPanelFooterRender?: () => JSX.Element;
}

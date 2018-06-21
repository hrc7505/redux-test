export default interface IRightPaneState {
    isRightPaneVisible: boolean;

    /**
     * This id is only used to identify the content within the right pane. All content being passed into
     * the right pane should have a unique id to track whether or not new content has been passed in or not.
     */
    rightPaneId: string;

    rightPaneHeaderText: string;
    rightPaneContent: JSX.Element;
    rightPaneFooterRender?: () => JSX.Element;
}

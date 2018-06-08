import IRightPanelData from "../../right-panel/interfaces/IRightPanelData";

export default interface IChromeState {
    isLeftPaneVisible: boolean;
    isRightPanelVisible: boolean;
    rightPanelData: IRightPanelData;

    // This is a flag to tell the chrome that it is being hosted alone since we will not have a react-router,
    // the links in the left pane cannot be rendered with NavLink.
    isStandAlone: boolean;
}

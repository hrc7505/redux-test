import IDashboardToggleRightPanePayload from "../duck/actions/interfaces/IDashboardToggleRightPanePayload";

export default interface IDashboardPropsFromDispatch {
    jobTileOnClick: (actionPayload: IDashboardToggleRightPanePayload) => void;
}

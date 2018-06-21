import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";

export default interface IDashboardPropsFromDispatch {
    jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload) => void;
    getData: () => void;
}

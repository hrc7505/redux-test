import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Dispatch } from "redux";

import ICloseRightPanelAction from "chrome/duck/actions/interfaces/ICloseRightPanelAction";
import IOpenRightPanelAction from "chrome/duck/actions/interfaces/IOpenRightPanelAction";
import IOpenRightPanelPayload from "chrome/duck/actions/interfaces/IOpenRightPanelPayload";
import openRightPanel from "chrome/duck/actions/openRightPanel";
import IToggleSwitchRightPanePayload from "content/common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import HeaderComponent from "content/sites/common/header/headerComponent";
import IHeaderProps from "content/sites/common/header/interfaces/IHeaderProps";
import IHeaderPropsFromDispatch from "content/sites/common/header/interfaces/IHeaderPropsFromDispatch";
import ISitesToggleRightPaneAction from "content/sites/duck/actions/interfaces/ISitesToggleRightPaneAction";
import sitesToggleRightPane from "content/sites/duck/actions/sitesToggleRightPane";

type Actions = IOpenRightPanelAction | ICloseRightPanelAction | ISitesToggleRightPaneAction;
type MapDispatchToProps = (dispatch: Dispatch<Actions>) => IHeaderPropsFromDispatch;

const mapDispatchToProps: MapDispatchToProps = (dispatch: Dispatch<Actions>): IHeaderPropsFromDispatch => ({
    openRightPanel: (actionPayload: IOpenRightPanelPayload): IOpenRightPanelAction =>
        dispatch(openRightPanel(actionPayload)),
    toggleRightPane: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
        dispatch(sitesToggleRightPane(actionPayload))
});

const HeaderContainer: React.ComponentClass = withRouter(
    connect(
        null,
        mapDispatchToProps
    )<IHeaderProps>(HeaderComponent)
);

export default HeaderContainer;

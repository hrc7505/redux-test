import { connect, Dispatch } from "react-redux";

import getSitesDetails from "./duck/actions/getSiteDetails";
import IAppState from "../../../duck/interfaces/IAppState";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandButtonsPayload from "../common/header/duck/actions/interfaces/ICommandButtonsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IGetSiteDetailsAction from "./duck/actions/interfaces/IGetSiteDetailsAction";
import ISetBreadcrumbAction from "../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesCloseRightPaneAction from "../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import setBreadcrumb from "../common/header/duck/actions/setBreadcrumb";
import setCommands from "../common/header/duck/actions/setCommands";
import setEntityTitle from "../common/header/duck/actions/setEntityTitle";
import SiteDetailsComponent from "./siteDetailsComponent";
import sitesCloseRightPane from "../duck/actions/sitesCloseRightPane";
import sitesToggleRightPane from "../duck/actions/sitesToggleRightPane";

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    return {
        site: state.sitesState.siteDetailsState.site,
        rightPaneProps: {
            isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible,
            rightPaneHeaderText: state.sitesState.rightPaneState.rightPaneHeaderText,
            rightPaneContent: state.sitesState.rightPaneState.rightPaneContent,
            rightPaneFooterRender: state.sitesState.rightPaneState.rightPaneFooterRender
                ? state.sitesState.rightPaneState.rightPaneFooterRender
                : null
        }
    };
}

type Actions = ISetBreadcrumbAction |
    ISetEntityTitleAction |
    ISetCommandsAction |
    ISitesToggleRightPaneAction |
    IGetSiteDetailsAction |
    ISitesCloseRightPaneAction;

function mapStateToDispatch(dispatch: Dispatch<Actions>): ISiteDetailsPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IBreadcrumbPayload): ISetBreadcrumbAction =>
            (dispatch(setBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IEnityTitlePayload): ISetEntityTitleAction =>
            dispatch(setEntityTitle(actionPayload)),
        setCommands: (actionPayload: ICommandButtonsPayload): ISetCommandsAction =>
            dispatch(setCommands(actionPayload)),
        jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getSiteDetails: (siteId: string): IGetSiteDetailsAction => dispatch(getSitesDetails(siteId)),
        closeRightPane: (): ISitesCloseRightPaneAction => dispatch(sitesCloseRightPane())
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<ISiteDetailsProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

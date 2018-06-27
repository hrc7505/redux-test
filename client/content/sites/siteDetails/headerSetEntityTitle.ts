import { connect, Dispatch } from "react-redux";

import getSitesDetails from "./duck/actions/getSiteDetails";
import headerSetBreadcrumb from "../common/header/duck/actions/headerSetBreadcrumb";
import headerSetCommands from "../common/header/duck/actions/headerSetCommands";
import headerSetEntityTitle from "../common/header/duck/actions/headerSetEntityTitle";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetSiteDetailsAction from "./duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderBreadcrumbPayload from "../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import IHeaderSetBreadcrumbAction from "../common/header/duck/actions/interfaces/IHeaderSetBreadcrumbAction";
import IHeaderSetCommandsAction from "../common/header/duck/actions/interfaces/IHeaderSetCommandsAction";
import IHeaderSetEntityTitleAction from "../common/header/duck/actions/interfaces/IHeaderSetEntityTitleAction";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesCloseRightPaneAction from "../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
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

type Actions = IHeaderSetBreadcrumbAction |
    IHeaderSetEntityTitleAction |
    IHeaderSetCommandsAction |
    ISitesToggleRightPaneAction |
    IGetSiteDetailsAction |
    ISitesCloseRightPaneAction;

function mapStateToDispatch(dispatch: Dispatch<Actions>): ISiteDetailsPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IHeaderBreadcrumbPayload): IHeaderSetBreadcrumbAction =>
            (dispatch(headerSetBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IHeaderEntityTitlePayload): IHeaderSetEntityTitleAction =>
            dispatch(headerSetEntityTitle(actionPayload)),
        setCommands: (actionPayload: IHeaderCommandButtonsPayload): IHeaderSetCommandsAction =>
            dispatch(headerSetCommands(actionPayload)),
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

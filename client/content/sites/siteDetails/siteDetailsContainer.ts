import { connect, Dispatch } from "react-redux";

import getSitesDetails from "./duck/actions/getSiteDetails";
import IAppState from "../../../duck/interfaces/IAppState";
import IBreadcrumbPayload from "../common/header/duck/actions/interfaces/IBreadcrumbPayload";
import ICommandsPayload from "../common/header/duck/actions/interfaces/ICommandsPayload";
import IEnityTitlePayload from "../common/header/duck/actions/interfaces/IEntityTitlePayload";
import IGetSiteDetailsAction from "./duck/actions/interfaces/IGetSiteDetailsAction";
import ISetBreadcrumbAction from "../common/header/duck/actions/interfaces/ISetBreadcrumbAction";
import ISetCommandsAction from "../common/header/duck/actions/interfaces/ISetCommandsAction";
import ISetEntityTitleAction from "../common/header/duck/actions/interfaces/ISetEntityTitleAction";
import ISiteCloseRightPaneAction from "../duck/actions/interfaces/ISiteCloseRightPaneAction";
import IIndividualSiteProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import setBreadcrumb from "../common/header/duck/actions/setBreadcrumb";
import setCommands from "../common/header/duck/actions/setCommands";
import setEntityTitle from "../common/header/duck/actions/setEntityTitle";
import siteCloseRightPane from "../duck/actions/siteCloseRightPane";
import SiteDetailsComponent from "./siteDetailsComponent";
import sitesToggleRightPane from "../duck/actions/sitesToggleRightPane";

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    return {
        site: state.sitesState.siteDetailsState.site,
        rightPaneProps: {
            ...state.sitesState.rightPaneState.rightPaneData,
            isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible
        }
    };
}

type Actions = ISetBreadcrumbAction |
    ISetEntityTitleAction |
    ISetCommandsAction |
    ISitesToggleRightPaneAction |
    IGetSiteDetailsAction |
    ISiteCloseRightPaneAction;

function mapStateToDispatch(dispatch: Dispatch<Actions>): ISiteDetailsPropsFromDispatch {
    return {
        setBreadcrumb: (actionPayload: IBreadcrumbPayload): ISetBreadcrumbAction =>
            (dispatch(setBreadcrumb(actionPayload))),
        setEntityTitle: (actionPayload: IEnityTitlePayload): ISetEntityTitleAction =>
            dispatch(setEntityTitle(actionPayload)),
        setCommands: (actionPayload: ICommandsPayload): ISetCommandsAction =>
            dispatch(setCommands(actionPayload)),
        jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getSiteDetails: (siteId: string): IGetSiteDetailsAction => dispatch(getSitesDetails(siteId)),
        closeRightPane: (): ISiteCloseRightPaneAction => dispatch(siteCloseRightPane())
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<IIndividualSiteProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

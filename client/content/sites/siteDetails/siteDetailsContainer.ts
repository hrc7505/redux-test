import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import getSitesDetails from "./duck/actions/getSiteDetails";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetSiteDetailsAction from "./duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderBreadcrumbPayload from "../common/header/duck/actions/interfaces/IHeaderBreadcrumbPayload";
import IHeaderCommandButtonsPayload from "../common/header/duck/actions/interfaces/IHeaderCommandButtonsPayload";
import IHeaderEntityTitlePayload from "../common/header/duck/actions/interfaces/IHeaderEntityTitlePayload";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesCloseRightPaneAction from "../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import setHeader from "../common/header/duck/operations/setHeader";
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

type Actions = ISitesToggleRightPaneAction |
    IGetSiteDetailsAction |
    ISitesCloseRightPaneAction;

function mapStateToDispatch(dispatch: ThunkDispatch<IAppState, void, Actions>): ISiteDetailsPropsFromDispatch {
    return {
        jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getSiteDetails: (siteId: string): IGetSiteDetailsAction => dispatch(getSitesDetails(siteId)),
        closeRightPane: (): ISitesCloseRightPaneAction => dispatch(sitesCloseRightPane()),
        setHeader: (
            breadcrumbPayload: IHeaderBreadcrumbPayload,
            entityTitlePayload: IHeaderEntityTitlePayload,
            commandButtonsPayload: IHeaderCommandButtonsPayload
        ): void => { dispatch(setHeader(breadcrumbPayload, entityTitlePayload, commandButtonsPayload)); }
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<ISiteDetailsProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

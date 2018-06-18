import { connect, Dispatch } from "react-redux";

import getSitesDetails from "./duck/actions/getSiteDetails";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetSiteDetailsAction from "./duck/actions/interfaces/IGetSiteDetailsAction";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../duck/actions/interfaces/ISetHeaderDataAction";
import ISiteCloseRightPaneAction from "../duck/actions/interfaces/ISiteCloseRightPaneAction";
import IIndividualSiteProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesToggleRightPaneByJobTileAction from "../duck/actions/interfaces/ISitesToggleRightPaneByJobTileAction";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import setHeaderContent from "../duck/actions/setHeaderContent";
import siteCloseRightPane from "../duck/actions/siteCloseRightPane";
import SiteDetailsComponent from "./siteDetailsComponent";
import sitesToggleRightPaneByJobTile from "../duck/actions/sitesToggleRightPaneByJobTile";

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    return {
        site: state.sitesState.siteDetailsState.site,
        rightPaneProps: {
            ...state.sitesState.rightPaneState.rightPaneData,
            isRightPaneVisible: state.sitesState.rightPaneState.isRightPaneVisible
        }
    };
}

type Actions = ISetHeaderDataAction |
    ISitesToggleRightPaneByJobTileAction |
    IGetSiteDetailsAction |
    ISiteCloseRightPaneAction;

function mapStateToDispatch(dispatch: Dispatch<Actions>): ISiteDetailsPropsFromDispatch {
    return {
        setHeaderData: (actionPayload: IHeaderPayload): ISetHeaderDataAction =>
            dispatch(setHeaderContent(actionPayload)),
        jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload): ISitesToggleRightPaneByJobTileAction =>
            dispatch(sitesToggleRightPaneByJobTile(actionPayload)),
        getSiteDetails: (siteId: string): IGetSiteDetailsAction => dispatch(getSitesDetails(siteId)),
        closeRightPane: (): ISiteCloseRightPaneAction => dispatch(siteCloseRightPane())
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<IIndividualSiteProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

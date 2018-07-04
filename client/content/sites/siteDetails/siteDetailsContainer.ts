import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import IAppState from "../../../duck/interfaces/IAppState";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesCloseRightPaneAction from "../duck/actions/interfaces/ISitesCloseRightPaneAction";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import headerSetHeader from "../common/header/duck/operations/headerSetHeader";
import SiteDetailsComponent from "./siteDetailsComponent";
import sitesCloseRightPane from "../duck/actions/sitesCloseRightPane";
import sitesToggleRightPane from "../duck/actions/sitesToggleRightPane";
import siteDetailsGetData from "./duck/operations/siteDetailsGetData";
import SiteDetailsShim from "./shim/siteDetailsShim";
import IHeaderPayload from "../common/header/duck/operations/interfaces/IHeaderPayload";

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    return {
        isLoading: state.sitesState.siteDetailsState.isLoading,
        site: state.sitesState.sitesDataState.sites[state.sitesState.siteDetailsState.site]
            ? state.sitesState.sitesDataState.sites[state.sitesState.siteDetailsState.site]
            : SiteDetailsShim.getData(),
        jobs: null,
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

type Actions = ISitesToggleRightPaneAction | ISitesCloseRightPaneAction;

function mapStateToDispatch(dispatch: ThunkDispatch<IAppState, void, Actions>): ISiteDetailsPropsFromDispatch {
    return {
        jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getData: (useShim: boolean, siteId: string): void => { dispatch(siteDetailsGetData(useShim, siteId)); },
        closeRightPane: (): ISitesCloseRightPaneAction => dispatch(sitesCloseRightPane()),
        setHeader: (headerPayload: IHeaderPayload): void => { dispatch(headerSetHeader(headerPayload)); }
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<ISiteDetailsProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

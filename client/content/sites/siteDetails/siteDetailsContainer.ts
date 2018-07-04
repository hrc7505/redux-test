import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import headerSetHeader from "../common/header/duck/operations/headerSetHeader";
import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderPayload from "../common/header/duck/operations/interfaces/IHeaderPayload";
import ISiteDetailsProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesToggleRightPaneAction from "../duck/actions/interfaces/ISitesToggleRightPaneAction";
import IToggleSwitchRightPanePayload from "../../common/rightPane/duck/actions/interfaces/IToggleSwitchRightPanePayload";
import SiteDetailsComponent from "./siteDetailsComponent";
import siteDetailsGetData from "./duck/operations/siteDetailsGetData";
import SiteDetailsShim from "./shim/siteDetailsShim";
import sitesToggleRightPane from "../duck/actions/sitesToggleRightPane";

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

type Actions = ISitesToggleRightPaneAction;

function mapStateToDispatch(dispatch: ThunkDispatch<IAppState, void, Actions>): ISiteDetailsPropsFromDispatch {
    return {
        jobTileOnClick: (actionPayload: IToggleSwitchRightPanePayload): ISitesToggleRightPaneAction =>
            dispatch(sitesToggleRightPane(actionPayload)),
        getData: (useShim: boolean, siteId: string): void => { dispatch(siteDetailsGetData(useShim, siteId)); },
        setHeader: (headerPayload: IHeaderPayload): void => { dispatch(headerSetHeader(headerPayload)); }
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<ISiteDetailsProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

import { connect, Dispatch } from "react-redux";

import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../duck/actions/interfaces/ISetHeaderDataAction";
import IIndividualSiteProps from "./interfaces/ISiteDetailsProps";
import ISiteDetailsPropsFromDispatch from "./interfaces/ISiteDetailsPropsFromDispatch";
import ISiteDetailsPropsFromState from "./interfaces/ISiteDetailsPropsFromState";
import ISitesToggleRightPaneByJobTileAction from "../duck/actions/interfaces/ISitesToggleRightPaneByJobTileAction";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import setHeaderContent from "../duck/actions/setHeaderContent";
import SiteDetailsComponent from "./siteDetailsComponent";
import sitesToggleRightPaneByJobTile from "../duck/actions/sitesToggleRightPaneByJobTile";

function mapStateToProps(state: IAppState): ISiteDetailsPropsFromState {
    // For future use
    return {};
}

function mapStateToDispatch(
    dispatch: Dispatch<ISetHeaderDataAction | ISitesToggleRightPaneByJobTileAction>
): ISiteDetailsPropsFromDispatch {
    return {
        setHeaderData: (actionPayload: IHeaderPayload): ISetHeaderDataAction =>
            dispatch(setHeaderContent(actionPayload)),
        jobTileOnClick: (actionPayload: ISitesToggleRightPanePayload): ISitesToggleRightPaneByJobTileAction =>
            dispatch(sitesToggleRightPaneByJobTile(actionPayload))
    };
}

const SiteDetailsContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<IIndividualSiteProps>(SiteDetailsComponent);

export default SiteDetailsContainer;

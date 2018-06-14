import { connect, Dispatch } from "react-redux";

import getIndividualSitePageContents from "../duck/actions/getIndividualSitePageContents";
import IAppState from "../../../duck/interfaces/IAppState";
import IGetIndividualSitePageContentsAction from "../duck/actions/interfaces/IGetIndividualSitePageContentsAction";
import IIndividualSiteProps from "./interfaces/IIndividualSiteProps";
import IIndividualSitePropsFromDispatch from "./interfaces/IIndividualSitePropsFromDispatch";
import IIndividualSitePropsFromState from "./interfaces/IIndividualSitePropsFromState";
import IndividualSiteComponent from "./individualSiteComponent";

function mapStateToProps(state: IAppState): IIndividualSitePropsFromState {
    return {
        rightPaneProps: {
            ...state.sitesState.rightPaneData,
            isRightPaneVisible: state.sitesState.isRightPaneVisible
        },
        headerData: state.sitesState.headerData,
    };
}

function mapStateToDispatch(
    dispatch: Dispatch<IGetIndividualSitePageContentsAction>
): IIndividualSitePropsFromDispatch {
    return {
        getPageData: (): IGetIndividualSitePageContentsAction => dispatch(getIndividualSitePageContents())
    };
}

const IndividualSiteContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapStateToDispatch
)<IIndividualSiteProps>(IndividualSiteComponent);

export default IndividualSiteContainer;

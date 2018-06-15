import { connect, Dispatch } from "react-redux";

import AllSitesComponent from "./allSitesComponent";
import IAllSitesComponentProps from "./interfaces/IAllSitesComponentProps";
import IAllSitesPropsFromDispatch from "./interfaces/IAllSitesPropsFromDispatch";
import IAllSitesPropsFromState from "./interfaces/IAllSitesPropsFromState";
import IAppState from "../../../duck/interfaces/IAppState";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISetHeaderDataAction from "../duck/actions/interfaces/ISetHeaderDataAction";
import setHeaderContent from "../duck/actions/setHeaderContent";

function mapStateToProps(state: IAppState): IAllSitesPropsFromState {
    // For future use
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<ISetHeaderDataAction>): IAllSitesPropsFromDispatch {
    return {
        setHeaderData: (actionPayload: IHeaderPayload): ISetHeaderDataAction =>
            dispatch(setHeaderContent(actionPayload))
    };
}

const AllSitesContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IAllSitesComponentProps>(AllSitesComponent);

export default AllSitesContainer;

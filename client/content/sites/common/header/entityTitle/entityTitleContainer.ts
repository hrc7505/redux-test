import { connect } from "react-redux";

import EntityTitleComponent from "./entityTitleComponent";
import IAppState from "../../../../../duck/interfaces/IAppState";
import IEntityTitleProps from "./interfaces/IEntityTitleProps";

function mapStateToProps(state: IAppState): IEntityTitleProps {
    return {
        title: state.sitesState.headerState.title
    };
}

const EntityTitleContainer: React.ComponentClass = connect(
    mapStateToProps
)<IEntityTitleProps>(EntityTitleComponent);

export default EntityTitleContainer;

import { connect } from "react-redux";

import EntityTitleComponent from "content/sites/common/header/entityTitle/entityTitleComponent";
import IEntityTitleProps from "content/sites/common/header/entityTitle/interfaces/IEntityTitleProps";
import IAppState from "duck/interfaces/IAppState";

function mapStateToProps(state: IAppState): IEntityTitleProps {
    return {
        title: state.sitesState.headerState.title
    };
}

const EntityTitleContainer: React.ComponentClass = connect(
    mapStateToProps
)<IEntityTitleProps>(EntityTitleComponent);

export default EntityTitleContainer;

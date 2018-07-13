import { connect } from "react-redux";

import EntityTitleComponent from "content/sites/common/header/entityTitle/entityTitleComponent";
import IEntityTitleProps from "content/sites/common/header/entityTitle/interfaces/IEntityTitleProps";
import IAppState from "duck/interfaces/IAppState";

type MapStateToProps = (state: IAppState) => IEntityTitleProps;

const mapStateToProps: MapStateToProps = (state: IAppState): IEntityTitleProps => ({
    title: state.sitesState.headerState.title
});

const EntityTitleContainer: React.ComponentClass = connect(
    mapStateToProps
)<IEntityTitleProps>(EntityTitleComponent);

export default EntityTitleContainer;

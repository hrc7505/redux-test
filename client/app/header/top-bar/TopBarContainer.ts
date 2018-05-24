import { connect, Dispatch } from "react-redux";

import { IToggleMenuAction, toggleMenu } from "./duck/actions";
import { IToggleMenu } from "./duck/State";
import TopBar from "./TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible
});

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    (dispatch: Dispatch<IToggleMenuAction>) => ({
        toggleMenu: (): IToggleMenuAction => dispatch(toggleMenu()),
    })
)<IToggleMenu>(TopBar);

export default TopBarContainer;

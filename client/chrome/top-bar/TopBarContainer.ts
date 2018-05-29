import { connect, Dispatch } from "react-redux";

import { IToggleMenuAction, toggleMenu } from "../../duck/Actions";
import TopBar, { IToggleMenu } from "./TopBar";

const mapStateToProps: (state: IToggleMenu) => IToggleMenu = (state: IToggleMenu): IToggleMenu => ({
    isLeftMenuVisible: state.isLeftMenuVisible,
});

function mapDispatchToProps(dispatch: Dispatch<IToggleMenuAction>): ReturnType<typeof mapDispatchToProps> {
    return {
        toggleMenu: (): IToggleMenuAction => dispatch(toggleMenu())
    };
}

const TopBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<IToggleMenu>(TopBar);

export default TopBarContainer;

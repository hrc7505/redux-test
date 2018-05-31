import { connect, Dispatch } from "react-redux";

import IAppReducer from "../../duck/models/IAppReducer";
import IToggleMenu from "./models/IToggleMenu";
import IToggleMenuAction from "../../duck/actions/models/IToggleMenuAction";
import toggleMenu from "../../duck/actions/ToggleMenu";
import TopBar from "./TopBar";

function mapStateToProps(state: IAppReducer): IToggleMenu {
    return {
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible,
    };
}

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

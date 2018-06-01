import { connect } from "react-redux";

import IAppReducer from "../../duck/interfaces/IAppReducer";
import ILeftPaneProps from "./interfaces/ILeftPaneProps";
import LeftPaneComponent from "./LeftPaneComponent";

function mapStateToProps(state: IAppReducer): ILeftPaneProps {
    return {
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible
    };
}

const LeftPaneContainer: React.ComponentClass = connect(
    mapStateToProps
)<ILeftPaneProps>(LeftPaneComponent);

export default LeftPaneContainer;

import { connect } from "react-redux";

import IAppReducer from "../../duck/models/IAppReducer";
import ILeftPaneProps from "./models/ILeftPaneProps";
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

import { connect } from "react-redux";

import HeaderComponent from "./HeaderComponent";
import IAppReducer from "../../../../duck/interfaces/iAppReducer";
import IHeaderComponentProps from "./interfaces/IHeaderComponentProps";

function mapStateToProps(state: IAppReducer): IHeaderComponentProps {
    return { ...state.navigationReducer };
}

const HeaderContainer: React.ComponentClass = connect(
    mapStateToProps
)<IHeaderComponentProps>(HeaderComponent);

export default HeaderContainer;

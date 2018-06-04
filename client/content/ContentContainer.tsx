import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import ContentComponent from "./contentComponent";
import getContents from "./duck/actions/GetContents";
import IAppReducer from "../duck/interfaces/IAppReducer";
import IContentComponentProps from "./interfaces/IContentComponentProps";
import IGetContentsAction from "./duck/actions/interfaces/IGetContentsAction";

function mapStateToProps(state: IAppReducer, ownProps: IContentComponentProps): IContentComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible
    };
}

type DispatchPropsType = IGetContentsAction;

function mapDispatchToProps(dispatch: Dispatch<DispatchPropsType>): ReturnType<typeof mapDispatchToProps> {
    return {
        getContents: (url: string): IGetContentsAction => dispatch(getContents(url))
    };
}

const ContentContainer: React.ComponentClass<RouteComponentProps<string>> = connect(
    mapStateToProps,
    mapDispatchToProps
)<IContentComponentProps>(ContentComponent);

export default withRouter(ContentContainer);

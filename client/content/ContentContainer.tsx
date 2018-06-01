import { connect, Dispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import closeRightPane from "./duck/actions/CloseRightPane";
import ContentComponent from "./ContentComponent";
import getContents from "./duck/actions/GetContents";
import IAppReducer from "../duck/interfaces/IAppReducer";
import ICloseRightPaneAction from "./duck/actions/interfaces/ICloseRightPaneAction";
import IContentComponentProps from "./interfaces/IContentComponentProps";
import IGetContentsAction from "./duck/actions/interfaces/IGetContentsAction";

function mapStateToProps(state: IAppReducer, ownProps: IContentComponentProps): IContentComponentProps {
    return {
        ...ownProps,
        isLeftMenuVisible: state.chromeReducer.isLeftMenuVisible,
        isRightPaneVisible: state.rightPaneReducer.isRightPaneVisible
    };
}

type DispatchPropsType = ICloseRightPaneAction | IGetContentsAction;

function mapDispatchToProps(dispatch: Dispatch<DispatchPropsType>): ReturnType<typeof mapDispatchToProps> {
    return {
        getContents: (url: string): IGetContentsAction => dispatch(getContents(url)),
        closeRightPane: (): ICloseRightPaneAction => dispatch(closeRightPane())
    };
}

const ContentContainer: React.ComponentClass<RouteComponentProps<string>> = connect(
    mapStateToProps,
    mapDispatchToProps
)<IContentComponentProps>(ContentComponent);

export default withRouter(ContentContainer);

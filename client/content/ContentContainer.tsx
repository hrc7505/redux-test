import { connect } from "react-redux";

import ContentComponent from "./ContentComponent";
import IContentComponentProps from "./models/IContentComponentProps";

function mapStateToProps(state: IContentComponentProps): IContentComponentProps {
    return {
        isLeftMenuVisible: state.isLeftMenuVisible
    };
}

const ContentContainer: React.ComponentClass = connect(
    mapStateToProps
)<IContentComponentProps>(ContentComponent);

export default ContentContainer;

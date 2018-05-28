import { connect } from "react-redux";

import CommandbarComponent, { ICommandBarComponentProps } from "./CommandbarComponent";
import { mapDispatchToProps } from "../../chrome/right-panel/RightPanelContainer";

const mapStateToProps: (state: ICommandBarComponentProps) => ICommandBarComponentProps =
    (state: ICommandBarComponentProps): ICommandBarComponentProps => ({
        ...state
    });

const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

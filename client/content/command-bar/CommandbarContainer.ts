import { connect, Dispatch } from "react-redux";

import { closeRightPanel, ICloseRightPanelAction, IOpenRightPanelAction, openRightPanel } from "../../duck/Actions";
import CommandbarComponent, { ICommandBarComponentProps } from "./CommandbarComponent";

const mapStateToProps: (state: ICommandBarComponentProps) => ICommandBarComponentProps =
    (state: ICommandBarComponentProps): ICommandBarComponentProps => ({
        ...state
    });

type DisptchProps = IOpenRightPanelAction | ICloseRightPanelAction;

function mapDispatchToProps(dispatch: Dispatch<DisptchProps>): ReturnType<typeof mapDispatchToProps> {
    return {
        closeRightPanel: (): ICloseRightPanelAction => dispatch(closeRightPanel()),
        openRightPanel: (child: JSX.Element): IOpenRightPanelAction => dispatch(openRightPanel(child))
    };
}

const CommandBarContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps
)<ICommandBarComponentProps>(CommandbarComponent);

export default CommandBarContainer;

import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import * as React from "react";

import IRightPanelProps from "./interfaces/IRightPanelProps";

import "./rightPanelStyle.scss";

export default class RightPanelComponent extends React.PureComponent<IRightPanelProps> {
    private panelInstance: Panel;

    public render(): JSX.Element {
        const {isRightPanelVisible, rightPanelProps } = this.props;

        return (
            <Panel
                componentRef={(panelInstance: Panel): Panel => this.panelInstance = panelInstance}
                isOpen={isRightPanelVisible}
                type={PanelType.custom}
                customWidth="500px"
                onLightDismissClick={this.closePanel}
                onDismissed={this.closePanel}
                isLightDismiss={true}
                headerText={rightPanelProps.rightPanelHeaderText}
                closeButtonAriaLabel="Close"
                onRenderFooterContent={rightPanelProps.rightPanelFooterRender}
                isFooterAtBottom={true}
                className="panelRoot"
                layerProps={{ className: "panelLayerClass" }}
            >
                {rightPanelProps.rightPanelContent}
            </Panel>
        );
    }

    private closePanel = (): void => {
        this.props.closeRightPanel();
    }
}

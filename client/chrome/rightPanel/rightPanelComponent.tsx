import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import * as React from "react";

import IRightPanelProps from "chrome/rightPanel/interfaces/IRightPanelProps";

import "chrome/rightPanel/rightPanelStyle.scss";

export default class RightPanelComponent extends React.PureComponent<IRightPanelProps> {
    private panelInstance: Panel;

    public render(): JSX.Element {
        const { isRightPanelVisible, rightPanelHeaderText, rightPanelContent, rightPanelFooterRender } = this.props;

        return (
            <Panel
                componentRef={(panelInstance: Panel): Panel => this.panelInstance = panelInstance}
                isOpen={isRightPanelVisible}
                type={PanelType.custom}
                customWidth="500px"
                onLightDismissClick={this.closePanel}
                onDismissed={this.closePanel}
                isLightDismiss={true}
                headerText={rightPanelHeaderText}
                closeButtonAriaLabel="Close"
                onRenderFooterContent={rightPanelFooterRender}
                isFooterAtBottom={true}
                className="panelRoot"
                layerProps={{ className: "panelLayerClass" }}
            >
                {rightPanelContent}
            </Panel>
        );
    }

    private closePanel = (): void => {
        this.props.closeRightPanel();
    }
}

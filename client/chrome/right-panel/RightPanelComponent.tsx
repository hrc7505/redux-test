import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import * as React from "react";

import IRightPanelProps from "./interfaces/IRightPanelProps";

import "./RightPanelComponentStyle.scss";

export default class RightPanelComponent extends React.Component<IRightPanelProps> {
    private panelInstance: Panel;

    public render(): JSX.Element {
        return (
            <Panel
                componentRef={(panelInstance: Panel): Panel => this.panelInstance = panelInstance}
                isOpen={this.props.isRightPanelVisible}
                type={PanelType.custom}
                customWidth="500px"
                onLightDismissClick={this.closePanel}
                onDismissed={this.closePanel}
                isLightDismiss={true}
                headerText="Test Panel"
                closeButtonAriaLabel="Close"
                onRenderFooterContent={this.onRenderFooterContent}
                isFooterAtBottom={true}
                className="panelRoot"
                layerProps={{ className: "panelLayerClass" }}
            >
                {this.props.childComponent}
            </Panel>
        );
    }

    private closePanel = (): void => {
        this.props.closeRightPanel();
    }

    private onRenderFooterContent = (): JSX.Element => (
        <div>
            <PrimaryButton onClick={this.panelInstance.dismiss} style={{ marginRight: "8px" }}>
                Save
            </PrimaryButton>
            <DefaultButton onClick={this.props.closeRightPanel}>Cancel</DefaultButton>
        </div>
    )
}

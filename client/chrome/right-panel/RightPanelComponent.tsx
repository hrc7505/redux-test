import { DefaultButton, PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "office-ui-fabric-react/lib/Panel";
import * as React from "react";

import { IRightPanelAction } from "../../duck/Actions";

import "./RightPanelComponentStyle.scss";

export interface IRightPanelProps {
    isRightPanelVisible: boolean;
    showRightPanel: () => IRightPanelAction;
}

export default class RightPanelComponent extends React.Component<IRightPanelProps> {
    public render(): JSX.Element {
        return (
            <Panel
                isOpen={this.props.isRightPanelVisible}
                type={PanelType.smallFixedFar}
                onDismissed={this.props.showRightPanel}
                headerText="Test Panel"
                closeButtonAriaLabel="Close"
                onRenderFooterContent={this.onRenderFooterContent}
                isFooterAtBottom={true}
                className="panelRoot"
                layerProps={{ className: "panelLayerClass" }}
            >
                <div>hello I am panel</div>
            </Panel>
        );
    }

    private onRenderFooterContent = (): JSX.Element => (
        <div>
            <PrimaryButton onClick={this.props.showRightPanel} style={{ marginRight: "8px" }}>
                Save
            </PrimaryButton>
            <DefaultButton onClick={this.props.showRightPanel}>Cancel</DefaultButton>
        </div>
    )
}

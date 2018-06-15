import { IconType } from "office-ui-fabric-react/lib/Icon";
import * as React from "react";

import DetailsListComponent from "../../../common/detail-list/DetailListComponent";
import IAllSitesComponentProps from "./interfaces/IAllSitesComponentProps";
import IHeaderPayload from "../duck/actions/interfaces/IHeaderPayload";
import ISitesToggleRightPanePayload from "../duck/actions/interfaces/ISitesToggleRightPanePayload";
import IToggleRightPanelPayload from "../../../chrome/right-panel/interfaces/IToggleRightPanelPayload";
import Test2 from "../../right-panel-body-components/test2";

import "./sitesStyle.scss";

export default class AllSitesComponent extends React.PureComponent<IAllSitesComponentProps> {
    public render(): JSX.Element {
        return (
            <DetailsListComponent />
        );
    }

    public componentDidMount(): void {
        this.props.setHeaderData(headerPayload);
    }
}

const rightPaneData: ISitesToggleRightPanePayload = {
    rightPaneHeaderText: "Right pane for all sites",
    rightPaneContent: <div>This is the body of the right pane...</div>,
    rightPaneFooterRender: (): JSX.Element => (<div>Footer for the right pane</div>)
};

const rightPanelData: IToggleRightPanelPayload = {
    rightPanelHeaderText: "Test Panel",
    rightPanelContent: <Test2 />,
    rightPanelFooterRender: (): JSX.Element => (<div>footer of the panel</div>)
};

const headerPayload: IHeaderPayload = {
    title: "Sites",
    commands: {
        farItems: [
            {
                iconProps: {
                    iconName: "Info",
                    iconType: IconType.default
                },
                key: "information",
                rightPaneData,
            }
        ],
        items: [
            {
                iconProps: {
                    iconName: "CirclePlus",
                    iconType: IconType.default
                },
                key: "site",
                name: "Site",
                rightPanelData
            },
        ],
        overflowItems: [],
    }
};

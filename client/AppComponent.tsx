import { initializeIcons } from "@uifabric/icons";
import * as React from "react";

import Chrome from "./chrome/Chrome";
import ContentContainer from "./content/ContentContainer";

import "./common/common-style/CommonStyle.scss";

export class AppComponent extends React.Component {
    constructor(props: object) {
        super(props);

        initializeIcons(undefined, { disableWarnings: true });
    }

    public render(): JSX.Element {
        return (
            <div className="cPanel">
                <Chrome />
                <ContentContainer />
            </div >
        );
    }
}

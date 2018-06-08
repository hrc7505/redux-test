import { initializeIcons } from "@uifabric/icons";
import * as React from "react";

import Chrome from "./chrome/chrome";
import ContentContainer from "./content/ContentContainer";

export class App extends React.Component {
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

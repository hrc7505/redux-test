import { initializeIcons } from "@uifabric/icons";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import Chrome from "./chrome/chrome";
import ContentContainer from "./content/contentContainer";

class App extends React.PureComponent<RouteComponentProps<string>> {
    constructor(props: RouteComponentProps<string>) {
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

export default withRouter(App);

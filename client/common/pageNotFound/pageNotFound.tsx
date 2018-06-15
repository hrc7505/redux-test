import * as React from "react";

import { RouteComponentProps, withRouter } from "react-router-dom";

class PageNotFound extends React.PureComponent<RouteComponentProps<string>> {
    public render(): JSX.Element {
        return (
            <div>
                <div>Oups. Page not found.</div>
                <button onClick={()=>{this.props.history.push("/")}}>Go back to dashboard.</button>
            </div>
        );
    }
}

export default withRouter(PageNotFound);

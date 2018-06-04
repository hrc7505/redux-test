import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ContentContainer from "./content/ContentContainer";
import store from "./index";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ContentContainer />
        </Router>
    </Provider>,
    document.getElementById("contentPart")
);

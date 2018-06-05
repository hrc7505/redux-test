import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ContentContainer from "./content/ContentContainer";
import store from "./index";

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/testcontent">
           <Route path="/testcontent" component={ContentContainer} />
        </Router>
    </Provider>,
    document.getElementById("root")
);

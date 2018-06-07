import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Chrome from "./chrome/Chrome";
import store from "./index";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Chrome />
    </Router>
  </Provider>,
  document.getElementById("root")
);

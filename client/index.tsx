import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, Store } from "redux";

import { AppComponent } from "./appComponent";
import appReducer from "./duck/AppReducer";
import IAppReducer from "./duck/interfaces/IAppReducer";

const store: Store<IAppReducer> = createStore(appReducer);
export default store;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <AppComponent />
        </Router>
    </Provider>,
    document.getElementById("root")
);

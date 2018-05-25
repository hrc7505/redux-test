import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import AppContainer from "./AppContainer";
import toggleMenu from "./duck/Reducer";
import { IToggleMenu } from "./duck/State";

const store: Store<IToggleMenu> = createStore(toggleMenu);
ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);

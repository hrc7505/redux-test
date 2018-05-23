import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import { ConnectedApp } from "./components/header/top-bar/Container";
import toggleMenu from "./components/header/top-bar/reducer";
import { IToggleMenu } from "./components/header/top-bar/State";

const store: Store<IToggleMenu> = createStore(toggleMenu);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById("root")
);

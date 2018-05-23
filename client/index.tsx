import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";

import LeftPaneContainer from "./app/duck/LeftPaneContainer";
import toggleMenu from "./app/header/top-bar/duck/reducer";
import { IToggleMenu } from "./app/header/top-bar/duck/State";

const store: Store<IToggleMenu> = createStore(toggleMenu);
ReactDOM.render(
    <Provider store={store}>
        <LeftPaneContainer />
    </Provider>,
    document.getElementById("root")
);

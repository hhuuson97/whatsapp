import React, { Component } from "react";

import createStore from "./store/createStore";
import AppContainer from "./AppContainer";

class Main extends Component {
  render() {
    const initialState = window.__INITIAL_STATE__;
    const store = createStore(initialState);
    return <AppContainer store={store} />;
  }
}

export default Main;

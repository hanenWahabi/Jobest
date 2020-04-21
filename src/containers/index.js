import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Jobs from "./Jobs/Jobs";
import { Provider } from "react-redux";
import createStore from "../store";
const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/jobs" component={Jobs} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

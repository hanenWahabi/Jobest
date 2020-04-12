import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Jobs from "./Jobs/Jobs";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/jobs" component={Jobs} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

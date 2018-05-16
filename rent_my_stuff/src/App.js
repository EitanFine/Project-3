import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/category/:id" component={Category} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;

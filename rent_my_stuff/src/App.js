import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import API from "./utils/API";

class App extends Component {

  state = {
    stuff: []
  }

  componentDidMount(){
    API.getStuff()
    .then(res => {
      console.log("STUFF", res);
      this.setState({
        stuff: res.data
      });
    })
  }

  render() {
    return (
      <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" render={() => {
          return this.state.stuff.map(item => {
            return <Stuff id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} />;
          })
        }} />
        {/* <Route exact path="/category" component={Category} /> */}
        {/* <Route exact path="/category/:id" component={Category} /> */}
        {/* <Route component={NoMatch} /> */} 
      </Switch>
    </div>
  </Router>
    );
  }
}

const Stuff = ({id, itemName, itemDescription}) => (
  <ul>
    <li>Id: {id}</li>
    <li>Item Name: {itemName}</li>
    <li>Item Description: {itemDescription}</li>
  </ul>
);

export default App;

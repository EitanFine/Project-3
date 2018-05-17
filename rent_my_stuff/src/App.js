import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import Moment from 'moment';
import SingleItem from "./components/SingleItem";
import Stuff from "./components/Stuff";
import Category from "./components/Category";
import { SignupForm, Login } from "./components";


class App extends Component {

  state = {
    stuff: [],
    id: ""
  }

  componentDidMount() {
    API.getStuff()
      .then(res => {
        console.log("STUFF", res);
        this.setState({
          stuff: res.data
        });
      })

  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
    })
  }
  renderStuff = () => {
    return this.state.stuff.map(item => {
      return <Stuff key={item.id}
        itemURL={item.itemURL}
        id={item.id}
        itemPrice={item.itemPrice}
        itemName={item.itemName}
        itemDescription={item.itemDescription}
        createdAt={item.createdAt}
        handleGetItem={this.handleGetItem}
      />;
    })
  }

  renderSingleItem = (props) => {
    return <SingleItem id={props.match.params} />
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" render={this.renderStuff} />
            <Route path="/singleitem/:id" render={this.renderSingleItem} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
            {/* <Route exact path="/category/:id" component={Category} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

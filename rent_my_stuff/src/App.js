import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import Moment from 'moment';
import SingleItem from "./components/SingleItem";
import Stuff from "./components/Stuff";
import Category from "./components/Category";
import About from "./components/About/About.js";
import SignUp from "./components/SignupForm";
import PostListing from './components/PostListing';
import { SignupForm, Login, Navbar } from "./components";
import MyItems from './components/UserSpecific/MyItems';
import HowItWorks from './components/HowItWorks.js';



class App extends Component {

  state = {
    stuff: [],
    id: "",
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  componentDidMount() {
    API.getStuff()
      .then(res => {
        console.log("STUFF", res);
        this.setState({
          stuff: res.data,
        });
      })
    API.getCurrentUser()
      .then(res => {
        this.setState({
          user: res.data.user,
          loggedIn: res.data.user || false
        })
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
          <Navbar loggedIn={this.state.loggedIn} logout={this.logout} />
          <Switch>
            <Route exact path="/" render={this.renderStuff} />
            <Route path="/singleitem/:id" render={this.renderSingleItem} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/about" component={About} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
            <Route exact path="/postlisting" component={PostListing} />
            <Route exact path="/myitems" component={MyItems} />
            {/* <Route exact path="/category/:id" component={Category} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;




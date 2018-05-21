import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import SingleItem from "./components/SingleItem";
import Stuff from "./components/Stuff";
import Category from "./components/Category";
import About from "./components/About/About.js";
import PostListing from './components/PostListing';
import HowItWorks from './components/HowItWorks';
import { SignupForm, Login, Navbar } from "./components";
import MyItems from './components/UserSpecific/MyItems';

class App extends Component {

  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  componentDidMount() {
    this.loadItems();
    API.getCurrentUser()
      .then(res => {
        this.setState({user: res.data.user, loggedIn: res.data.user || false})
      })
<<<<<<< HEAD
=======

>>>>>>> 5e9594af76efefc9ed8e42e92d17079de6732dbf
  }

  loadItems = () =>{
    API.getStuff()
      .then(res => {
        this.setState({
          stuff: res.data,
        });
      });
<<<<<<< HEAD
=======

>>>>>>> 5e9594af76efefc9ed8e42e92d17079de6732dbf
  }

  handleLogout = () => {
    API.logout()
    .then(() => {this.setState({ user: null, loggedIn: false});
    });
  }

  setUser = (user) => {
    //console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
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
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" component={Stuff} />
            <Route path="/singleitem/:id" render={this.renderSingleItem} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/howitworks" component={HowItWorks} />
            <Route exact path="/myitems" render={() => <MyItems loggedIn={this.state.loggedIn} />} />
            <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
            <Route exact path="/postlisting" render={() => <PostListing loggedIn={this.state.loggedIn} loadItems={this.loadItems} />} />
            {/* <Route exact path="/category/:id" component={Category} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;




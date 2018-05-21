import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import SingleItem from "./components/SingleItem";
import Stuff from "./components/Stuff";
import Services from "./components/Services";
import Everything from "./components/Everything";
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
  }

  loadItems = () =>{
    API.getStuff()
      .then(res => {
        this.setState({
          stuff: res.data,
        });
      });
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
    return <SingleItem id={props.match.params.id} />
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" component={Everything} />
            <Route exact path="/rentals" component={Stuff} />
            <Route exact path="/services" component={Services} />
            <Route path="/singleitem/:id" component={SingleItem} />
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




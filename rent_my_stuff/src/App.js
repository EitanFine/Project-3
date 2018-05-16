import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListingCard from "./components/ListingCard"
import './App.css';
import Category from './components/Category';


class App extends Component {
  render() {
    return (
      <ListingCard />
    );
  }
}

export default App;

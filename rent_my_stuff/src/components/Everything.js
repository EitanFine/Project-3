import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

class Everything extends Component {
  state = {
    stuff: []
  };

  componentDidMount() {
    API.getStuff().then(res => {
      this.setState({
        stuff: res.data
      });
    });
  }

  renderStuff = () => {
    return (
      <div>
        <Link to="/rentals">
          <h1>go to rentals, put picture here</h1>
        </Link>
        <Link to="/services">
          <h1>go to services, put picture here</h1>
        </Link>
      </div>
    );
  };

  render() {
    return this.renderStuff();
  }
}

export default Everything;

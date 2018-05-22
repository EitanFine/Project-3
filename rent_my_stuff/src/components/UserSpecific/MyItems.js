import React, { Component } from "react";

import API from "../../utils/API";
//import SingleItem from "../SingleItem";
// import Stuff from "../Stuff";
import {Redirect} from "react-router-dom"

// import Moment from "moment";
// import {Link } from "react-router-dom";
// import { Modal, Button } from "react-bootstrap";
import Item from './Item';

class MyItems extends Component {
  constructor() {
    super();
    this.state = {
      stuff: [],
    };
  }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('next props: ', nextProps);
  // }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    console.log("inside of load items");
    API.getAllByUser()
      .then(res => {
        //console.log("item", res.data);
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteOne = id => {
    let r = window.confirm(`Are you sure you want to delete listing with ID: ${id} ?`);
    if (r == true) {
      API.destroyOneItem(id)
        .then(res => {
          this.loadItems();
          console.log("inside then of the event handler");
        })
        .catch(err => console.log(err));
    }
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {

    if (!this.props.loggedIn){
      return <Redirect to="/" />;
    }
    return this.state.stuff.map(item => {
      return <Item key={`${item.itemName+item.itemPrice+item.itemDescription}`} 
                   deleteMe={this.deleteOne} item={item}
                   reloadItems={this.loadItems}
                  />
    });
  }
}

export default MyItems;

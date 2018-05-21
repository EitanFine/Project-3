import React, { Component } from "react";
//import DeleteButton from "../Buttons/DeleteButton";

import API from "../../utils/API";
//import SingleItem from "../SingleItem";
import Stuff from "../Stuff";
import {Redirect} from "react-router-dom"

class MyItems extends Component {
  constructor() {
    super();
    this.state = {
      stuff: []
    };
  }  
  componentDidMount() {
//change this line so it grabs current user
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
  }

  render() {

    if (!this.props.loggedIn){
      return <Redirect to="/" />;
    }
    return this.state.stuff.map(item => {
      return (
        <div>
        <Stuff
          key={item.id}
          itemURL={item.itemURL}
          id={item.id}
          itemPrice={item.itemPrice}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          createdAt={item.createdAt}
        />
        {/* <DeleteButton/> */}
        </div>
      );
    });
  }
}

export default MyItems;

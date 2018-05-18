import React, { Component } from "react";
import API from "../../utils/API";
//import SingleItem from "../SingleItem";
import Stuff from "../Stuff";

class MyItems extends Component {
  constructor() {
    super();
    this.state = {
      stuff: []
    };
  }
  componentDidMount() {
//change this line so it grabs current user
    API.getAllByUser(1)
      .then(res => {
        console.log("item", res.data);
        this.setState({
          stuff: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return this.state.stuff.map(item => {
      return (
        <Stuff
          key={item.id}
          itemURL={item.itemURL}
          id={item.id}
          itemPrice={item.itemPrice}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          createdAt={item.createdAt}
        />
      );
    });
  }
}

export default MyItems;

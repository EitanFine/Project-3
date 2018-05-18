import React, { Component } from "react";
import API from "./utils/API";

class DeleteButton extends Component {
    
  deleteOne = id => {
    API.destroyOneItem(id)
  };

  render() {
    return;
    <div>
      <button onClick={this.deleteOne()}>x</button>
    </div>;
  }
}

export default DeleteButton;

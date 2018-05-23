import React from "react";
import { Modal, Button } from "react-bootstrap";
import API from "../../utils/API";

import Moment from "moment";
import { Link } from "react-router-dom";
import "./userspecific.css";

class Item extends React.Component {
  state = {
    itemName: this.props.item.itemName,
    show: false,
    id: this.props.item.id,
    itemPrice: this.props.item.itemPrice,
    itemDescription: this.props.item.itemDescription,
    createdAt: this.props.item.createdAt,
    itemURL: this.props.item.itemURL
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    API.updateOneItem({
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      itemPrice: this.state.itemPrice,
      id: this.state.id
    }).then(() => {
      console.log("UPDATE SUCCEEDED!");
      this.handleClose();
      this.props.reloadItems();
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Modal
              animation={false}
              show={this.state.show}
              onHide={this.handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>Editing Listing ID: {this.state.id}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="edit-listing-modal">
                <b>Item Name:</b> <br />
                <input
                  type="text"
                  name="itemName"
                  value={this.state.itemName}
                  onChange={this.handleInputChange}
                />
                <br />
                <b>Item Description:</b> <br />
                <textarea
                  rows="6"
                  cols="50"
                  name="itemDescription"
                  value={this.state.itemDescription}
                  onChange={this.handleInputChange}
                />
                <br />
               <b> Item Price: </b><br />
                <input
                  type="number"
                  name="itemPrice"
                  value={this.state.itemPrice}
                  onChange={this.handleInputChange}
                />
                <br />
                <button className="btn btn-warning" onClick={this.submitForm}>Submit Changes</button>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4>
              <b>Personal Listing:</b> {this.state.itemName}
            </h4>
            <button
              type="button"
              style={{ float: "right" }}
              onClick={() => this.props.deleteMe(this.state.id)}
              className="btn btn-danger"
            >
              {" "}
              Delete Listing
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.handleShow}
            >
              Edit Item
            </button>

            <br />
            <br />
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  style={{
                    height: "225px",
                    width: "90%",
                    borderRadius: "5%"
                  }}
                  src={this.state.itemURL}
                  alt="img"
                />
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-6">
                    <h4>
                      <b>Listing Id:</b> {this.state.id}.
                    </h4>
                    <h4>
                      <b>Price:</b> ${this.state.itemPrice}.{" "}
                      <span
                        style={{
                          color: "#626262",
                          fontFamily: "'Timmana', sans-serif"
                        }}
                      >
                        (per day)
                      </span>
                    </h4>
                  </div>
                  <div className="col-sm-6 text-right">
                    <Link to={`/singleitem/${this.state.id}`}>
                      <button className="btn btn-lg">View Listing</button>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <hr />
                    <h4>
                      <b>Description</b>
                    </h4>
                    <p>{this.state.itemDescription}.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 text-right">
                <h5
                  style={{ fontFamily: "'Timmana', sans-serif" }}
                  className="text-right"
                >
                  <span>Posted On: </span>
                  {Moment(this.state.createdAt).format("LL")}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;

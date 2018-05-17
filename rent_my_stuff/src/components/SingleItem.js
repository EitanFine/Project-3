import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";

class SingleItem extends React.Component {
  state = {
    item: null
  };
  componentDidMount() {
    console.log("this.state is ", this.state);
  }

  componentWillMount() {
    API.getOneItem(this.props.id.id)
      .then(res => {
        this.setState({
          item: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    if (!this.state.item) {
      return null;
    }
    return (
      <div>
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4>
                <b>For Rent:</b> {this.state.item.singleitem.itemName}
              </h4>
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
                    src={this.state.item.singleitem.itemURL}
                    alt="img"
                  />
                </div>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <h4>
                        <b>Listing Id:</b> {this.state.item.singleitem.id}.
                      </h4>
                      <h4>
                        <b>Price:</b> ${this.state.item.singleitem.itemPrice}.{" "}
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
                    <div className="col-sm-6 text-right" />
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <hr />
                      <h4>
                        <b>Description</b>
                      </h4>
                      <p>{this.state.item.singleitem.itemDescription}.</p>
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
                    {Moment(this.state.item.createdAt).format("LL")}
                  </h5>
                </div>
              </div>
            </div>
            <h5> {this.state.item.user.name} </h5>
            <h5> {this.state.item.user.streetAddress} </h5>
            <h5> {this.state.item.user.city} </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;

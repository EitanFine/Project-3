import React, { Component } from "react";

import API from "../../utils/API";
//import SingleItem from "../SingleItem";
import Stuff from "../Stuff";
import {Redirect} from "react-router-dom"

import Moment from "moment";
import { BrowserRouter as Link } from "react-router-dom";

class MyItems extends Component {
  constructor() {
    super();
    this.state = {
      stuff: []
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

  render() {

    if (!this.props.loggedIn){
      return <Redirect to="/" />;
    }
    return this.state.stuff.map(item => {
      return (
        <div>
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4>
                  <b>Personal Listing:</b> {item.itemName}
                </h4>
                <button
                  style={{ float: "right" }}
                  onClick={() => this.deleteOne(item.id)}
                >
                  x
                </button>
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
                      src={item.itemURL}
                      alt="img"
                    />
                  </div>
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-sm-6">
                        <h4>
                          <b>Listing Id:</b> {item.id}.
                        </h4>
                        <h4>
                          <b>Price:</b> ${item.itemPrice}.{" "}
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
                        <Link to={`/singleitem/${item.id}`}>
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
                        <p>{item.itemDescription}.</p>
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
                      {Moment(item.createdAt).format("LL")}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default MyItems;

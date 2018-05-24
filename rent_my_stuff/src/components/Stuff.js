import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

class Stuff extends Component {
  state = {
    stuff: [],
    filteredStuff: [],
    cattypes: [],
    selectOptions: []
  };

  componentDidMount() {
    API.getStuff().then(res => {
      this.setState({
        stuff: res.data,
        filteredStuff: res.data
      });
    });

    API.findAllCategories()
      .then(resCats => {
        let filteredCats = resCats.data.filter(
          category => category.categoryType === "rental"
        );
        this.setState({
          cattypes: filteredCats
        })
      })
      .finally(() => {
        this.setState({
          selectOptions: this.selectCategories(this.state.cattypes)
        })
      })
  }

  selectCategories = (catTypes) => {
    let SelectOptions = catTypes.map(selopts =>
      <option value={selopts.id} key={selopts.id}> {" "} {selopts.categoryName}{" "}
      </option>);
  
    return SelectOptions;
  }

  handleSelectedChange = e => {
    if (!e.target.value) {
      this.setState({
        filteredStuff: this.state.stuff
      })
    } else {
      let _filterItems = this.state.stuff.filter(items => items.itemCatId == e.target.value)
      this.setState({
        filteredStuff: _filterItems
      })
    }
  };

  renderStuff = () => {
    return this.state.filteredStuff.map(item => {
      if (item.itemCategorytype === "rental") {
        return (
          <div>
            <div className="container">
              <div className="panel panel-default">
                <div style={{ border: '#4484ce solid 1px' }} className="panel-heading">
                  <h4 style={{ color: '#4484ce' }}>
                    <b style={{ color: '#F19F4D' }}>For Rent:</b> {item.itemName}
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
                        src={item.itemURL}
                        alt="img"
                      />
                    </div>
                    <div className="col-sm-8">
                      <div className="row">
                        <div className="col-sm-6">
                          <h4>
                            <b>Listing Id:</b> {item.id}
                          </h4>
                          <div />
                          <h4>
                            <b>Price:</b> ${item.itemPrice}{" "}
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
                            <button style={{ background: '#F19F4D', color: 'white' }} className="btn btn-lg">View Listing</button>
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
      }
    });
  };

  render() {
    return <div className='container'>
          <select style={{width: '220px', background: 'white', color: '#F19F4D', border: '1px solid #4484ce', marginLeft: '15px'}} class="form-control" onChange={this.handleSelectedChange}>    
        <option  value=""> 
          All Categories...  </option>
        {this.state.selectOptions}
      </select>
      <br/><br/><br/>
      {this.renderStuff()}
    </div>
  }
}

export default Stuff;

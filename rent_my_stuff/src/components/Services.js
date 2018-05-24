import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

class Services extends Component {
  state = {
    stuff: [],
    filteredStuff: [],
    cattypes: [],
    selectOptions:[]
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
          category => category.categoryType === "service"
        );
        this.setState({
          cattypes: filteredCats
        })
      })
      .finally(()=> {
        this.setState({
          selectOptions : this.selectCategories(this.state.cattypes)          
        })
      })    
  }


  selectCategories = (catTypes) => {
    let SelectOptions = catTypes.map(selopts =>      
      <option value={selopts.id} key={selopts.id}> {" "} {selopts.categoryName}{" "}
            </option>  );

    return SelectOptions;
  }

  handleSelectedChange = e => {
    if (!e.target.value){
      this.setState({
        filteredStuff: this.state.stuff
      })
    } else{
      let _filterItems = this.state.stuff.filter(items => items.itemCatId == e.target.value  )
      this.setState({
        filteredStuff: _filterItems
      })
    }
  };

  renderStuff = () => {
    return this.state.filteredStuff.map(item => {
      if (item.itemCategorytype === "service") {
        return (
          <div>
            <div className="container">
              <div className="panel panel-default">
                <div style={{ border: '#F19F4D solid 1px' }} className="panel-heading">
                  <h4 style={{ color: '#F19F4D' }}>
                    <b style={{ color: '#4484ce' }}>Service:</b> {item.itemName}
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
                            <button style={{ background: '#4484ce', color: 'white' }} className="btn btn-lg">View Listing</button>
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
    return <div>
        <select onChange={this.handleSelectedChange} >    
        <option selected value=""> 
          Please Select...  </option>
        {this.state.selectOptions}
      </select>
      <h1> Before render stuff </h1>
      {this.renderStuff()}
    </div>
    // return  this.renderStuff();
  }
}

export default Services;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import API from "./utils/API";

class App extends Component {

  state = {
    stuff: []
  }

  componentDidMount() {
    API.getStuff()
      .then(res => {
        console.log("STUFF", res);
        this.setState({
          stuff: res.data
        });
      })
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" render={() => {
              return this.state.stuff.map(item => {
                return <Stuff key={item.id} itemURL={item.itemURL} id={item.id} itemPrice={item.itemPrice} itemName={item.itemName} itemDescription={item.itemDescription} />;
              })
            }} />
            {/* <Route exact path="/category" component={Category} /> */}
            {/* <Route exact path="/category/:id" component={Category} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const Stuff = ({ itemURL, id, itemPrice, itemName, itemDescription }) => (
  <div>
    <div className='container'>
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4><b>For Rent:</b> {itemName}.</h4>
        </div>
        <div class="panel-body">
          <div className='row'>
            <div className='col-sm-4'>
              <img style={{ height: '225px', width: '90%', borderRadius: '5%' }} src={itemURL} alt="img" />
            </div>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h4><b>Id:</b> {id}.</h4>
                  <h4><b>Price:</b> ${itemPrice}. (per day)</h4>
                </div>
                <div className='col-sm-6 text-right'>
                  <button className="btn btn-lg">View Listing</button>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <h4><b>Description</b></h4>
                  <p>{itemDescription}.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>





);

export default App;

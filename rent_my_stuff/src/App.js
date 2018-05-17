import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import API from "./utils/API";
import Moment from 'moment';
import SingleItem from "./components/SingleItem";
class App extends Component {

  state = {
    stuff: [],
    id: ""
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

 

  renderStuff = () => {
    return this.state.stuff.map(item => {
      return <Stuff key={item.id}
        itemURL={item.itemURL}
        id={item.id}
        itemPrice={item.itemPrice}
        itemName={item.itemName}
        itemDescription={item.itemDescription}
        createdAt={item.createdAt}
        // handleGetItem={this.handleGetItem}
      />;
    })
  }

  renderSingleItem = (props) => {
    return <SingleItem id={props.match.params}/>
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" render={this.renderStuff} />
            <Route path="/singleitem/:id" render={this.renderSingleItem} />
            {/* <Route exact path="/category" component={Category} /> */}
            {/* <Route exact path="/category/:id" component={Category} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const Stuff = ({ itemURL, id, itemPrice, itemName, itemDescription, createdAt, handleGetItem }) => (
  <div>
    <div className='container'>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4><b>For Rent:</b> {itemName}</h4>
        </div>
        <div className="panel-body">
          <div className='row'>
            <div className='col-sm-4'>
              <img style={{ height: '225px', width: '90%', borderRadius: '5%' }} src={itemURL} alt="img" />
            </div>
            <div className='col-sm-8'>
              <div className='row'>
                <div className='col-sm-6'>
                  <h4><b>Listing Id:</b>  {id}.</h4>
                  <h4><b>Price:</b> ${itemPrice}. <span style={{color: '#626262', fontFamily: "'Timmana', sans-serif"}}>(per day)</span></h4>
                </div>
                <div className='col-sm-6 text-right'>
                  <Link to={`/singleitem/${id}`}><button className="btn btn-lg">View Listing</button></Link>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                <hr/>
                  <h4><b>Description</b></h4>
                  <p>{itemDescription}.</p>
                  

                </div>
              </div>
            </div>
          </div>
          <div className='row'>
          <div className='col-sm-12 text-right'>
          <h5 style={{fontFamily: "'Timmana', sans-serif"}}
           className='text-right'><span>Posted On: </span>
           {Moment(createdAt).format('LL')}</h5>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>





);

export default App;

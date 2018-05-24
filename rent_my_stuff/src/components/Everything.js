import React, { Component } from "react";
import API from "../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";
import './Everything.css';
import RentImg from './rms_rent1.png';
import Service from './rms_service1.png';
class Everything extends Component {
  state = {
    stuff: []
  };

  componentDidMount() {
    API.getStuff().then(res => {
      this.setState({
        stuff: res.data
      });
    });
  }

  renderStuff = () => {
    return (

      <div className='container-fluid background' >
        <div style={{ height: '300px' }}>
        </div>
        <div className='row'>
          <div className='col-sm-5 text-center imageDiv' >
          <Link to="/services">
              <img className='logoImg' src={Service} alt="Services" />
            </Link>
          </div>
          <div className='col-sm-2'>
          </div>
          <div className='col-sm-5 text-centert imageDiv'>
            <Link to="/rentals">
              <img className='logoImg' src={RentImg} alt="Rent My Stuff" />
            </Link>
          </div>
        </div>
        <div style={{ height: '300px' }}>
        </div>
      </div>
    );
  };

  render() {
    return this.renderStuff();
  }
}

export default Everything;

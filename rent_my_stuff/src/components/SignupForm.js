import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Row, Col } from "./BootstrapGrid"
import API from "../utils/API";
import './SignUpForm.css';
import { Link } from 'react-router-dom';


const styles = {
  header: {
    color: "orange",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    creditCard: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleSignUp = event => {
    event.preventDefault();
    API.signUp(this.state)
      .then(({ data: URL }) => {
        window.location.replace(URL);
      })
      .catch(err => {
        console.dir(err);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }
    return (
 
      <body id="unique">
      <br />    
      

      <div className="signup-form">
      <form onSubmit={this.handleSignUp}>
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account!</p>
      <hr />
          <div className="form-group">
          <input type="text" className="form-control" name="name" placeholder="Name" required="required" value={this.state.name} onChange={this.handleInputChange} />
          {/* <div className="col-xs-6"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div> */}
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Email" required="required" value={this.state.email} onChange={this.handleInputChange} />
          </div>
      <div className="form-group">
              <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.handleInputChange} />
          </div>
      <div className="form-group">
              <input type="password" className="form-control" name="creditCard" placeholder="Credit Card" required="required"  value={this.state.creditCard} onChange={this.handleInputChange} />
          </div>       

          <div className="form-group">
            <input type="text" className="form-control" name="streetAddress" placeholder="Address" required="required" value={this.state.streetAddress} onChange={this.handleInputChange} />
          </div>


          <div className="form-group">
            <input type="text" className="form-control" name="city" placeholder="City" required="required"  value={this.state.city} onChange={this.handleInputChange} />
          </div> 

           <div className="form-group">
            <input type="text" className="form-control" name="state" placeholder="State" required="required"  value={this.state.state} onChange={this.handleInputChange} />
          </div> 

            <div className="form-group">
            <input type="text" className="form-control" name="zipCode" placeholder="Zip Code" required="required"  value={this.state.zipCode} onChange={this.handleInputChange} />
          </div> 
          <div className="form-group">
        <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
      </div>
      <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
          </div>
      </form >
      <Link  style={{color: '#4484ce'}} className="nav-item nav-link" to="/login">
    <div className="hint-text">Already have an account? <Link style={{color: '#F19F4D'}}  to="/login">Login here</Link></div>
    </Link>
  </div>
  </body>
    )
  }
}

export default SignupForm;
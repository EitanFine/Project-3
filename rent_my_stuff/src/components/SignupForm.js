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
      // <Wrapper>
      //   <form onSubmit={this.handleSignUp}>

      //   <Row>
      //     <Col>
      //       <h1 style={styles.header}>Signup Form</h1>
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Name: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="name" required  type="text" value={this.state.name} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Email: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="email" required type="text" value={this.state.email} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Password: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="password" required  type="password" value={this.state.password} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Credit Card: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="creditCard" required type="password" value={this.state.creditCard} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Street Address: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="streetAddress" type="text" value={this.state.streetAddress} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>City: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>State: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="state" type="text" value={this.state.state} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <label>Zip Code: </label>
      //     </Col>
      //     <Col span={3}>
      //       <input name="zipcode" type="text" value={this.state.zipcode} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <input  type="submit" value="Sign Up" />
      //     </Col>
      //   </Row>
      //   </form>
      // </Wrapper>
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
      <Link className="nav-item nav-link" to="/login">
    <div className="hint-text">Already have an account? <a href="#">Login here</a></div>
    </Link>
  </div>
  </body>
    )
  }
}

export default SignupForm;
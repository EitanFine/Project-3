import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Row, Col } from "./BootstrapGrid"
import API from "../utils/API";

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
      <Wrapper>
        <form onSubmit={this.handleSignUp}>

        <Row>
          <Col>
            <h1 style={styles.header}>Signup Form</h1>
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Name: </label>
          </Col>
          <Col span={3}>
            <input name="name" required  type="text" value={this.state.name} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Email: </label>
          </Col>
          <Col span={3}>
            <input name="email" required type="text" value={this.state.email} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Password: </label>
          </Col>
          <Col span={3}>
            <input name="password" required  type="password" value={this.state.password} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Credit Card: </label>
          </Col>
          <Col span={3}>
            <input name="creditCard" required type="password" value={this.state.creditCard} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>Street Address: </label>
          </Col>
          <Col span={3}>
            <input name="streetAddress" type="text" value={this.state.streetAddress} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>City: </label>
          </Col>
          <Col span={3}>
            <input name="city" type="text" value={this.state.city} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>state: </label>
          </Col>
          <Col span={3}>
            <input name="state" type="text" value={this.state.state} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <label>zipcode: </label>
          </Col>
          <Col span={3}>
            <input name="zipcode" type="text" value={this.state.zipcode} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <input  type="submit" value="Sign Up" />
          </Col>
        </Row>
        </form>
      </Wrapper>
    )
  }
}

export default SignupForm;
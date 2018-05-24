import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { Wrapper, Row, Col } from "./BootstrapGrid";
import API from "../utils/API";
import './Login.css'

const styles = {
  header: {
    color: "purple",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

class Login extends Component {
  state = {
    redirectTo: "",
    email: "",
    password: "",
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleLogin = event => {
    event.preventDefault();
    API.login({ email: this.state.email, password: this.state.password })
      .then((res) => {
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/myitems"
        });
      })
      .catch(err => console.log(err))
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />
    }
    return (

      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form onSubmit={this.handleLogin} className="login-container">
          <p><input name="email" value={this.state.email} onChange={this.handleInputChange} type="email" placeholder="Email" /></p>
          <p><input name="password" value={this.state.password} onChange={this.handleInputChange} type="password" placeholder="Password" /></p>
          <p><input type="submit" value="Log in" /></p>
        </form>
      </div>
    );
  }
}

export default Login;
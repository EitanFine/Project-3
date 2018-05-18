import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import { Wrapper, Row, Col } from "./BootstrapGrid";
import API from "../utils/API";

const styles = {
  header: {
    color: "purple",
    borderStyle: "solid",
    borderWidth: "1px",
    textAlign: "center"
  }
}

class Login extends Component{ 
  state = {
    redirectTo: "",
    email: "",
    password: "",
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  };

  handleLogin = event => {
    event.preventDefault();
    API.login({email: this.state.email, password: this.state.password})
    .then((res) => {
        console.log("RES", res);
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/"
        });
      })
      .catch(err => console.log(err))
  }

  render(){
    if(this.state.redirectTo){
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <Wrapper>
        <form onSubmit={this.handleLogin}>
        <Row>
          <Col>
            <h1 style={styles.header}>Login</h1>
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
          <Col span={4}>
            <input name="password" required type="password" value={this.state.password} onChange={this.handleInputChange} />
          </Col>
        </Row>
        <Row>
          <Col span={2} offset={3}>
            <input type="submit" value="Log In"/>
          </Col>
        </Row>
        </form>
      </Wrapper>
    );
  }
}

export default Login;
import React, {Component} from "react"
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
        //console.log("login RES.data", res.data);
        this.props.setUser(res.data)
        this.setState({
          redirectTo: "/myitems"
        });
      })
      .catch(err => console.log(err))
  }

  render(){
    if(this.state.redirectTo){
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      // <Wrapper>
      //   <form onSubmit={this.handleLogin}>
      //   <Row>
      //     <Col>
      //       <h1 style={styles.header}>Login</h1>
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
      //     <Col span={4}>
      //       <input name="password" required type="password" value={this.state.password} onChange={this.handleInputChange} />
      //     </Col>
      //   </Row>
      //   <Row>
      //     <Col span={2} offset={3}>
      //       <input type="submit" value="Log In"/>
      //     </Col>
      //   </Row>
      //   </form>
      // </Wrapper>

 
  <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Log in</h2>

  <form onSubmit={this.handleLogin} className="login-container">
    <p><input  name="email" value={this.state.email} onChange={this.handleInputChange} type="email" placeholder="Email" /></p>
    <p><input  name="password" value={this.state.password} onChange={this.handleInputChange} type="password" placeholder="Password" /></p>
    <p><input type="submit" value="Log in" /></p>
  </form>
  {/* <img src="/rms_logo.png" className="logo" alt="logo" /> */}

</div>
    );
  }
}

export default Login;
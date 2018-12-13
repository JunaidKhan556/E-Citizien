import React, { Component } from 'react';
import './App.css';
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/Dashboard';
import firebase from "./config/firebase"

class App extends Component {
  constructor(){
    super();
    this.state = {
      signup:false,
      login:false,
      dashboard:false
    }
  }
  signup = () => {
    this.setState({
      login:false,
      signup:true
    })
  }
  signup2 = () => {
    this.setState({
      login:true,
      signup:false
    })
  }
  login = () => {
    this.setState({
      login:true
    })
  }
main = () => {
  return(
    <div className="container">
        <div className="card-body" id="mainscreen">
        <img 
        className="rounded mx-auto d-block"
        src = "https://www.brandcrowd.com/gallery/brands/pictures/picture15192799896918.png" width="250px"/>
        <h2 className="text-center">E-Citizen</h2>
        <p align="center"><button className="btn btn-default" style={{width:"150px"}} onClick={this.login}>Login</button></p>
        <h4 style={{margin:"2%"}} align="center">---------------or---------------</h4>
        <p align="center"><button className="btn btn-default" style={{width:"150px"}} onClick={this.signup}>SignUp</button></p>
    </div>
    </div>
  );
};
dashboard = () => {
  this.setState({
    dashboard:true,
    login:false
  })
}
  render() {
    const {signup, login,dashboard} = this.state;
    return (
      <div>
        {!login && !signup && !dashboard && this.main()}
        {login && <Login dashboard={this.dashboard}/>}
        {signup && <Signup signup2={this.signup2}/>}
        {dashboard && <Dashboard />}
      </div>
    );
  }
}

export default App;

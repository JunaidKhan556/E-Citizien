import React, { Component } from 'react';
import './App.css';
import Login from './screens/login';
import Signup from './screens/signup';
import Dashboard from './screens/Dashboard';
import firebase from "./config/firebase"

class App extends Component {
  constructor(){
    super();
    this.state = ({
      user:null,
      signup:false,
      login:false,
      dashboard:false
    });
  }
  componentDidMount() {
    this.authListener();
  }

  authListener = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
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
    <div className="container ">
        <div className="card-body" id="mainscreen">
        <img 
        className="rounded-top mx-auto d-block img-responsive rgba-stylish-strong"
        src={require('./image/E-citizen.png')} width="250px"/>

        <p align="center"><button className="btn btn-default" style={{width:"150px",marginTop:"20px"}} onClick={this.login}>
        Login</button></p>
        <h4 style={{margin:"2%"}} align="center" className="text-white">OR</h4>
        <p align="center"><button className="btn btn-default" style={{width:"150px"}} onClick={this.signup}>
        SignUp</button></p>
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
logout = () => {
  this.setState({
    dashboard:false,
    login:false,
    signup:false
  })
}
  render() {
    const {signup, login,dashboard} = this.state;
    return (
      <div>
        {!login && !signup && !dashboard && this.main()}
        {login && <Login dashboard={this.dashboard}/>}
        {signup && <Signup signup2={this.signup2}/>}
        {dashboard && <Dashboard logout={this.logout}/>}
      </div>
    );
  }
}

export default App;

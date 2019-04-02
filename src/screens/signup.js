import React, { Component, isValidElement } from 'react';
import '../App.css';
import firebase from "../config/firebase";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = ({
      email: '',
      password: ''
    });
  }
  handleChange = e =>  {
    this.setState({ [e.target.name]: e.target.value });
  }
  signup = e =>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{
      console.log(u);
      this.props.signup2();
    })
    .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
        <div className=" card-body" id="login">
        <img 
        className="rounded-top mx-auto d-block img-responsive rgba-stylish-strong"
        src={require('../image/E-citizen.png')} width="250px"/>
        <h2 className="text-center">Create Your Account</h2>
        <form>
            <input type="email" className="form-control" id="input" placeholder="Enter your Email...."
            name="email" value={this.state.email} onChange={this.handleChange}/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            <input type="password" className="form-control" placeholder="Enter your password...."
            name="password" value={this.state.password} onChange={this.handleChange}/>
            <p align="center"><button className="btn btn-default" style={{width:"150px"}} id="loginbtn" onClick={this.signup}>Signup</button></p>
        </form>
      </div>
    );
  }
}

export default Signup;

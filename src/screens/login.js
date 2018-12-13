import React, { Component } from 'react';
import '../App.css';


class Login extends Component {
  constructor(props){
    super(props);
    
  }

dash = () =>{
    this.props.dashboard();
}
  render() {
    return (
      <div className="card-body" id="login">
        <img 
        className="rounded mx-auto d-block"
        src = "https://www.brandcrowd.com/gallery/brands/pictures/picture15192799896918.png" width="250px"/>
        <h2 className="text-center">Login</h2>
        <form>
            <input type="number" className="form-control" id="input" placeholder="Enter your CNIC...."/>
            <input type="password" className="form-control" placeholder="Enter your password...."/>
            <p align="center"><button className="btn btn-default" style={{width:"150px"}} id="loginbtn" onClick={this.dash}>Login</button></p>
        </form>
      </div>
    );
  }
}

export default Login;

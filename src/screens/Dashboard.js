import React, { Component } from 'react';
import '../App.css';
import Home from './home'
import Complains from './complains'
import Alert from './alert'
import firebase from '../config/firebase'
import Category from './category';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      home:true,
      complains:false,
      alert:false,
      category:false
    }
  }
  complain = () => {
    console.log("hey");
    this.setState({
      home:false,
      complains:true,
      alert:false
    })
  }
  alert = () => {
    console.log("hey");
    this.setState({
      home:false,
      complains:false,
      alert:true
    })
  }
  home = () => {
    console.log("hey");
    this.setState({
      home:true,
      complains:false,
      alert:false
    })
  }
  category = () => {
    this.setState({
      home:false,
      complains:false,
      alert:false,
      category:true
    })
  }
  cate = () => {
    this.setState({
      home:false,
      complains:true,
      alert:false,
      category:false
    })
  }
  logout = () => {
    console.log("logout");
    firebase.auth().signOut();
    this.props.logout();
  }
  render() {
    const {home, complains, alert,category} = this.state;
    return (
      <div>
        <div className="pos-f-t" id="nav"> 
          <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <button type="button" class="btn btn-outline-secondary btn-block text-white" onClick={this.home}
            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" aria-label="Toggle navigation">Home</button><hr className="bg-secondary"/>
            <button type="button" class="btn btn-outline-secondary btn-block text-white" onClick={this.complain}
            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" aria-label="Toggle navigation">Complains</button><hr className="bg-secondary"/>
            <button type="button" class="btn btn-outline-secondary btn-block text-white" onClick={this.alert}
            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" aria-label="Toggle navigation">Alerts</button><hr className="bg-secondary"/>
            <button type="button" class="btn btn-outline-secondary btn-block text-white"
            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" aria-label="Toggle navigation">Feedback</button><hr className="bg-secondary"/>
            <button type="button" class="btn btn-outline-secondary btn-block text-white"
            data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" aria-label="Toggle navigation">Profile</button><hr className="bg-secondary"/>
            <button type="button" class="btn btn-danger btn-block" style={{marginTop:"30px"}} onClick={this.logout}>Logout</button>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark" style={{borderBottom:"1px solid black"}}>
          <h1 align="center" class="text-white" onClick={this.home}>E-Citizen</h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>  
      <div  
        style={{marginTop:"5%",marginBottom:"2%",
        display:"block",padding:"1px 16px"}}>
          {home && <Home category={this.category}/>}
          {!home && complains && <Complains />}
          {!home && !complains && alert && !category && <Alert />}
          {!home && !complains && !alert && category && <Category cate={this.cate}/>}
      </div>
      </div>
    );
  }
}

export default Dashboard;

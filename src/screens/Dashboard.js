import React, { Component } from 'react';
import '../App.css';
import Home from './home'
import Complains from './complains'

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      home:true,
      complains:false
    }
  }
  complain = () => {
    console.log("hey");
    this.setState({
      home:false,
      complains:true
    })
  }
  home = () => {
    console.log("hey");
    this.setState({
      home:true,
      complains:false
    })
  }
  render() {
    const {home, complains} = this.state;
    return (
      <div>
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h1 align="center" class="text-white">E-Citizen</h1>
            <button type="button" class="btn btn-outline-secondary btn-block">Complains</button>
            <button type="button" class="btn btn-outline-secondary btn-block">Alerts</button>
            <button type="button" class="btn btn-outline-secondary btn-block">Feedback</button>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>  
      <div  
        style={{marginTop:"5%",marginBottom:"2%",
        display:"inline-block",padding:"1px 16px"}}>
          {home && <Home />}
          {!home && complains && <Complains />}
      </div>
      </div>
    );
  }
}

export default Dashboard;

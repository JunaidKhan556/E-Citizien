import React, { Component } from 'react';
import '../App.css';


class Complains extends Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
        <div style={{border:"1px solid black"}}>
            <label for="sel1" style={{color:"white"}}>Select Area:</label>
            <select className="form-control">
                <option value="volvo">Saddar</option>
                <option value="saab">New Karachi</option>
                <option value="mercedes">Gulshan e Iqbal</option>
                <option value="audi">DHA Phase 7</option>
            </select>
            <div>
                <h2 align="center">Complains</h2>
            </div>
        </div>
    );
  }
}

export default Complains;

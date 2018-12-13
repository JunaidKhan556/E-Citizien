import React, { Component, isValidElement } from 'react';
import '../App.css';
import firebase from "../config/firebase";

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:'Junaid Khan',
        father:'A ghaffar khan',
        gender:'Male',
        dob:'',
        address:'',
        cnic:'',
        userArr:[]
    }
  }

  signup = () => {
      this.props.signup2();
  }
  cnic = () => {
    var { userArr } = this.state;
      console.log("hey");
      
    var starCountRef = firebase.database().ref(`nadra`);
    console.log(starCountRef);
    
    starCountRef.once('value', (snapshot) => {
      console.log('data===>', snapshot.val());
      userArr.push({ ...snapshot.val() });
      this.setState({
        userArr
      })
    })
  }
  confirm = () => {
    console.log(this.state.userArr);
    this.state.userArr.map((val) => {
        console.log(val.name);
        /*this.setState({
            name:val.name,
            father:val.father,
            gender:val.gender,
            dob:val.dob,
            cnic:val.cnic,
            address:val.address
        })*/
      })
  }
  render() {
      const {name, father, gender, address, dob} = this.state;
    return (
      <div className="card-body" id="signup">
        <img 
        className="rounded mx-auto d-block"
        src = "https://www.brandcrowd.com/gallery/brands/pictures/picture15192799896918.png" width="250px"/>
        <h2 className="text-center">Signup</h2>
            <input type="number" className="form-control" id="input" placeholder="Enter CNIC number...." onChange={this.cnic}/>
            <p align="center"><button className="btn btn-default" style={{width:"150px"}} onClick={this.confirm}>Confirm</button></p>
            <input type="text" className="form-control" placeholder="Full Name" value={name} disabled/>
            <input type="text" className="form-control" placeholder="Father Name" value={father} disabled/>
            <input type="text" className="form-control" placeholder="Gender" value={gender} disabled/>
            <input type="text" className="form-control" placeholder="Date of Birth" value={dob} disabled/>
            <input type="text" className="form-control" placeholder="Address" value={address} disabled/>
            <input type="password" className="form-control" placeholder="Enter Your Password...."/>
            <p align="center"><button className="btn btn-default" style={{width:"150px"}} id="loginbtn" onClick={this.signup}>SignUp</button></p>
      </div>
    );
  }
}

export default Signup;

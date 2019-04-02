import React, { Component } from 'react';
import '../App.css';
import firebase from '../config/firebase';
import ImageUploader from "react-images-upload";

class Complains extends Component {
  constructor(props){
    super(props);
    this.state = ({
        name:'',
        phone:'',
        category:'',
        subcategory:'',
        province:'',
        district:'',
        city:'',
        area:'',
        near:'',
        imglink1:'',
        complainNo:0,
        uid:'',
        rcvArea:'',
        rcvCity:'',
        rcvCatg:'',
        rcvSubCatg:'',
        userArr:[]
    }) 
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
      const { userArr } = this.state;
      firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
          // User is signed in.
          localStorage.setItem('uid',user.uid);
      } else {
          // No user is signed in.
      }
      });
    var commentsRef = firebase.database().ref().child('UsersProfile');
    commentsRef.on('child_added', function (data) {
      var uid = localStorage.getItem('uid');
      if(uid == data.val().uid){
          console.log(data.val());
          userArr.push(data.val());
      }
      console.log(userArr);
    });
  }

    getData = () => {
    const { userArr } = this.state;
    return userArr.map((val) => {
        return (
        //   <div className="card">
        //     <div className="card-body">
        //       <img src={val.img} height="100" width="100" id="userimg"/>
        //         <span className="font-weight-bold" style={{ marginLeft:"2%"}}>Name:&nbsp;{val.username}</span><br/>
        //         <span className="font-weight-bold" style={{ marginLeft:"2%"}}>Status:&nbsp;{val.status}</span><br/>
        //         <span className="font-weight-bold" style={{ marginLeft:"2%"}}>Date:&nbsp;{val.date}</span> <br/>
        //         <span className="font-weight-bold" style={{ marginLeft:"2%"}}>Time:&nbsp;{val.time}</span><br/>
        //         <span className="font-weight-bold" style={{ marginLeft:"2%"}}>At:&nbsp;{val.place}</span> 
        //     </div>
        //   </div>
        <div style={{padding:"10px"}}>
            <div class="card bg-dark text-white">
                <img class="card-img" src={val.imglink1} alt="Card image"/>
                <div class="card-img-overlay">
                    <h5 class="card-title">{val.category}, {val.subcategory}</h5>
                    <p class="card-text">{val.area}, {val.city}</p>
                    <p class="card-text">Status:</p>
                </div>
            </div>
        </div>
        )
        })
  }

handleChange = e =>  {
    this.setState({ [e.target.name]: e.target.value });
}

city = () =>{
    if(this.state.province == '')
    {
        return(
            <select className="form-control" value={this.state.province} onChange={this.handleChange}
            placeholder="Select your City" name="province">
                <option value=""></option>
                <option value="">Select a province first..</option>
            </select>
        );
    }
      else if(this.state.province === 'kpk')
      {
          console.log(this.state.province);
          return(
              <select className="form-control" value={this.state.city} onChange={this.handleChange}
              placeholder="Select your City" name="city">
                <option value="Abbottabad">Abbottabad</option>
                <option value="Buner">Buner</option>
                <option value="Bannu">Bannu</option>
                <option value="Charsadda">Charsadda</option>
                <option value="Dera Ismail Khan">Dera Ismail Khan</option>
                <option value="Kohat">Kohat</option>
                <option value="Mardan">Mardan</option>
                <option value="Nowshera">Nowshera</option>
                <option value="Swabi">Swabi</option>
                <option value="Peshawar">Peshawar</option>
            </select>
        );
    }
      else if(this.state.province === 'balochistan')
      {
          console.log(this.state.province);
        return(
            <select className="form-control" value={this.state.city} onChange={this.handleChange}
            placeholder="Select your City" name="city">
                <option value="Chaman">Chaman</option>
                <option value="Gwadar">Gwadar</option>
                <option value="Jaffarabad">Jaffarabad</option>
                <option value="Khuzdar">Khuzdar</option>
                <option value="Lasbela">Lasbela</option>
                <option value="Nasirabad">Nasirabad</option>
                <option value="Quetta">Quetta</option>
                <option value="Sibi">Sibi</option>
                <option value="Turbat">Turbat</option>
                <option value="Zhob">Zhob</option>
            </select>
        );
      }
      else if(this.state.province === 'sindh')
      {
          console.log(this.state.province);
          return(
              <select className="form-control" value={this.state.city} onChange={this.handleChange}
              placeholder="Select your City" name="city">
                <option value="Dadu">Dadu</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Jacobabad">Jacobabad</option>
                <option value="Karachi">Karachi </option>
                <option value="Khairpur">Khairpur</option>
                <option value="Larkana">Larkana</option>
                <option value="Mirpur Khas">Mirpur Khas</option>
                <option value="Nawabshah">Nawabshah</option>
                <option value="Sukkur">Sukkur</option>
                <option value="Shikarpur">Shikarpur</option>
            </select>
        );
        
      }
      else if(this.state.province === 'punjab')
      {
          console.log(this.state.province);
        return(
            <select className="form-control" value={this.state.city} onChange={this.handleChange}
            placeholder="Select your City" name="city">
                <option value="Bahawalpur ">Bahawalpur </option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Gujranwala ">Gujranwala </option>
                <option value="Gujrat">Gujrat</option>
                <option value="Jhang">Jhang</option>
                <option value="Lahore">Lahore</option>
                <option value="Multan">Multan</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Sargodha">Sargodha</option>
                <option value="Sialkot">Sialkot</option>
                <option value="Sheikhupura">Sheikhupura</option>
                <option value="Sahiwal">Sahiwal</option>
            </select>
        );
      }

  }
subCategory = () =>{
    if(this.state.category == '')
    {
      return(
          <select className="form-control" value={this.state.category} onChange={this.handleChange}
          placeholder="Select your City" name="category">
          <option value=""></option>
              <option value="">Select a Category first..</option>
          </select>
      );
    }
    else if(this.state.category === 'ele')
    {
        console.log(this.state.category);
      return(
          <select className="form-control" value={this.state.subcategory} onChange={this.handleChange}
            name="subcategory">
              <option value="Phase Off">Phase Off</option>
              <option value="Jumper Burn Out">Jumper Burn Out</option>
              <option value="Supply Off">Supply Off</option>
              <option value="Low Voltage">Low Voltage</option>
              <option value="High Voltage">High Voltage</option>
              <option value="Fluctuation">Fluctuation</option>
              <option value="Main Wire Broken">Main Wire Broken</option>
              <option value="PMT Flash">PMT FLash</option>
              <option value="Meter Burnt">Meter Burnt</option>
              <option value="Pole Broken">Pole Broken</option>
          </select>
      );
    }
    /* Sadaf's Work Paste here */

    /* ======================= */
 
}
area = () =>{
    if(this.state.city == '')
    {
      return(
          <select className="form-control" value={this.state.area} onChange={this.handleChange}
          placeholder="Select your City" name="area">
          <option value=""></option>
              <option value="">Select a city first..</option>
          </select>
      );
    }
    else if(this.state.city === 'Karachi')
    {
      return(
          <select className="form-control" value={this.state.area} onChange={this.handleChange}
            name="area">
              <option value="Baldia Town">Baldia Town</option>
              <option value="Bin Qasim Town">Bin Qasim Town</option>
              <option value="Jamshed Town">Jamshed Town</option>
              <option value="Korangi Town">Korangi Town</option>
              <option value="Liaquatabad Town">Liaquatabad Town</option>
              <option value="Lyari Town">Lyari Town</option>
              <option value="North Nazimabad Town">North Nazimabad Town</option>
              <option value="Orangi Town">Orangi Town</option>
              <option value="Saddar Town">Saddar Town</option>
              <option value="Shah Faisal Town">Shah Faisal Town</option>
          </select>
      );
    }   
}
submit = () => {
            const min = 1;
            const max = 10000;
            const rand = min + Math.random() * (max - min);
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  // User is signed in.
                  console.log(user.uid);
                  localStorage.setItem('uid',user.uid);
                } else {
                  // No user is signed in.
                }
              });
            const {
              name,
              phone,
              category,
              subcategory,
              province,
              city,
              area,
              near,
              imglink1,
              complainNo,
              uid
            } = this.state;
            const user = localStorage.getItem('uid');
            let dbRef = firebase.database().ref(`UsersProfile/${user}/Complains`).push();
            dbRef.set({
                name,
                phone,
                category,
                subcategory,
                province,
                city,
                area,
                near,
                imglink1,
                complainNo:rand,
                uid:user
            });
            let complainRef = firebase.database().ref(`Complains/TotalComplains/${category}/${subcategory}`).push();
            complainRef.set({
                name,
                phone,
                category,
                subcategory,
                province,
                city,
                area,
                near,
                imglink1,
                complainNo:rand,
                uid:user
            });
            let areaRef = firebase.database().ref(`Complains/${area}/${category}/${subcategory}`).push();
            areaRef.set({
                name,
                phone,
                category,
                subcategory,
                province,
                city,
                area,
                near,
                imglink1,
                complainNo:rand,
                uid:user
            });
            let yearRef = firebase.database().ref(`Complains/2019/April/${category}/${subcategory}`).push();
            yearRef.set({
                name,
                phone,
                category,
                subcategory,
                province,
                city,
                area,
                near,
                imglink1,
                complainNo:rand,
                uid:user
            });
    };
          
image1 = e => {
            let img1 = e[0];
            var storage = firebase.storage();
            var fileUpload = storage.ref('images/' + img1.name);
            fileUpload.put(img1)
              .then(x => {
                return x.ref.getDownloadURL()
              })
              .then(url => {
                console.log(url)
                this.setState({
                  imglink1: url
                });
              })
              .catch(err => {
                console.log(err)
              });
    };

  render() {
    return (
        <div className="container">
            <p align="center">
                <button type="button" className="btn btn-success btn-outline-success btn-lg" 
                data-toggle="modal" style={{borderRadius:"50%"}} data-target="#exampleModalCenter">
                    +
                </button>
            </p>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content" >
                    <div class="modal-header" className="bg-primary">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        <h3 className="modal-title text-white" id="exampleModalCenterTitle" align="center">Register Your Complain here!</h3>
                    </div>
                    <div class="modal-body" className="bg-light container" 
                    style={{padding:"20px"}}>
                        <h5 align="center" style={{marginBottom:"20px"}}>Complainant</h5>
                        <div className="row">
                        <div class="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Name:</label>
                            </div>
                            <input type="text" className="form-control" id="name" 
                            name="name" value={this.state.name} onChange={this.handleChange} required/>
                        </div>
                        <hr className="bg-dark"/>
                        <div class="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Phone:</label>
                            </div>
                        <input type="number" className="form-control" id="number" 
                        name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                        </div>
                        </div>
                        <hr className="bg-dark"/>
                        <h5 align="center" style={{marginBottom:"20px"}}>Complain</h5>
                        <div className="row">
                        <div className="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Category:</label>
                            </div>
                        <select className="form-control" value={this.state.category} onChange={this.handleChange}
                        placeholder="Select a Category" name="category">
                            <option value=""></option>
                            <option value="edu">Education</option>
                            <option value="ele">Electricity</option>
                            <option value="env">Environment</option>
                            <option value="gar">Garbage</option>
                            <option value="pol">Police</option>
                            <option value="rail">Railway</option>
                            <option value="sui">Sui Gas</option>
                            <option value="tra">Traffic Police</option>
                            <option value="tran">Transportation</option>
                            <option value="wat">Water</option>
                        </select> 
                        </div>
                        <div class="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Type:</label>
                            </div>
                            {this.subCategory()}
                        </div>
                        </div>
                        <hr className="bg-dark"/>
                        <h5 align="center" style={{marginBottom:"20px"}}>Area of Complain   </h5>
                        <div className="row">
                        <div class="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Province:</label>
                            </div>
                        <select className="form-control" value={this.state.province} onChange={this.handleChange}
                        placeholder="Select your Province" name="province">
                            <option value=""></option>
                            <option value="kpk">KPK</option>
                            <option value="punjab">Punjab</option>
                            <option value="sindh">Sindh</option>
                            <option value="balochistan">Balochistan</option>
                        </select>
                        </div>
                        <div class="input-group mb-3 col">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">City:</label>
                            </div>
                        {this.city()}
                        </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Area:</label>
                            </div>
                        {this.area()}
                        </div>
                        <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="validationTextarea">Nearest Place:</label>
                            </div>
                            <textarea class="form-control" id="validationTextarea" value={this.state.near} 
                            onChange={this.handleChange}
                            name="near" placeholder="Enter here..." required></textarea>
                        </div>
                        <hr className="bg-dark"/>
                        <h5 style={{marginBottom:"20px"}} align="center">Upload Images</h5>
                        <ImageUploader
                            onChange={this.image1}
                            singleImage={true}
                            withIcon={true}
                            withPreview={true}
                            buttonText="Upload Image"
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                        />
                        <hr className="bg-dark"/>
                        
                    </div>
                    <div className="modal-footer bg-light">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.submit} data-dismiss="modal">Submit</button>
                    </div>
                    </div>
                </div>
                </div>
            <hr/>
            {/* <select className="form-control">
                <option value="volvo">Select an area</option>
                <option value="volvo">Saddar</option>
                <option value="saab">New Karachi</option>
                <option value="mercedes">Gulshan e Iqbal</option>
                <option value="audi">DHA Phase 7</option>
            </select>
            <hr/> */}
            <div>
                <h2 align="center" className="bg-dark rounded text-white">Complains</h2>
            </div>
            <hr/>
            <div>
                {this.getData()}
            </div>
        </div>
    );
  }
}

export default Complains;

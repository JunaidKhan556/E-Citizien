import React, { Component } from 'react';
import '../App.css';
import Home from './home'
import Complains from './complains'
import Alert from './alert'
import firebase from '../config/firebase'

class Category extends Component {
  constructor(props){
    super(props);
  }
  cate = () => {
      this.props.cate();
  }
  
  render() {
    return (
        <div style={{padding:"10px"}}>
        <div class="card-deck">
          <div class="card border-success" >
          <div class="hovereffect">
              <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/complain.png')} alt=""/>
              <div class="overlay">
                <h2>Complains</h2>
                <button class="info" onClick={this.cate}>Enter</button>
              </div>
            </div>
            <div class="card-body" id="card-body">
              <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Complains</b></h4>
              <p class="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
          <div class="card border-success">
            <div class="hovereffect">
              <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/alert.png')} alt=""/>
              <div class="overlay">
                <h2>Alerts</h2>
                <button class="info" onClick={this.cate}>Enter</button>
              </div>
            </div>
            <div class="card-body " id="card-body">
              <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Alerts</b></h4>
              <p class="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
          <div class="card border-success">
            <div class="hovereffect">
              <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/feedback.png')} alt=""/>
              <div class="overlay">
                <h2>Feedback</h2>
                <button class="info" onClick={this.cate}>Enter</button>
              </div>
            </div>
            <div class="card-body " id="card-body">
              <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Feedback</b></h4>
              <p class="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
          <div class="card border-success">
            <div class="hovereffect">
              <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/plus.png')} alt=""/>
              <div class="overlay">
                <h2>Coming Soon</h2>
              </div>
            </div>
            <div class="card-body " id="card-body">
              <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Coming Soon</b></h4>
              <p class="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
          <div class="card border-success">
            <div class="hovereffect">
              <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/plus.png')} alt=""/>
              <div class="overlay">
                <h2>Coming Soon</h2>
              </div>
            </div>
            <div class="card-body" id="card-body">
              <h4 class="card-title bg-dark text-white rounded" align="center"><b>Coming Soon</b></h4>
              <p class="card-text"><small class="text-muted"></small></p>
            </div>
          </div>
          </div>
        </div>
    );
  }
}

export default Category;

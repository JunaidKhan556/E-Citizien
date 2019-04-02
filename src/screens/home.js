import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
  constructor(props){
    super(props);
    
  }

  cate = () => {
    this.props.category();
  }
  render() {
    return (
    <div style={{padding:"10px"}}>
      <div class="card-deck">
        <div class="card border-success" >
        <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/education.png')} alt=""/>
            <div class="overlay">
              <h2>Education</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Education</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/electricity.png')} alt=""/>
            <div class="overlay">
              <h2>Electricity</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body " id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Electricity</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/environment.jpg')} alt=""/>
            <div class="overlay">
              <h2>Environment</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body " id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Environment</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/trash.png')} alt=""/>
            <div class="overlay">
              <h2>Garbage</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body " id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Garbage</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/police.png')} alt=""/>
            <div class="overlay">
              <h2>Police</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center"><b>Police</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        </div>
        <br/>
        <div class="card-deck">
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/railway.png')} alt=""/>
            <div class="overlay">
              <h2>Railway</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Railway</b></h4>

            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/gas.png')} alt=""/>
            <div class="overlay">
              <h2>Sui Gas</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body " id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Sui Gas</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success">
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/traffic.png')} alt=""/>
            <div class="overlay">
              <h2>Traffic</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Traffic Police</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success" >
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/transport.png')} alt=""/>
            <div class="overlay">
              <h2>Transportation</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center" ><b>Trnsportation</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
        <div class="card border-success" >
          <div class="hovereffect">
            <img class="card-img-top img-responsive" style={{padding:"20px"}} src={require('../image/water.png')} alt=""/>
            <div class="overlay">
              <h2>Water</h2>
              <button class="info" onClick={this.cate}>Enter</button>
            </div>
          </div>
          <div class="card-body" id="card-body">
            <h4 class="card-title bg-dark text-white rounded" align="center"><b>Water</b></h4>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>
      </div>
      <br/>
    </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: ""
    };
  }

  render() {
    const { lat, long } = this.state;
    return (
      <div className="container card" id="map">
        <div className="card-body">
          <h1 align="center">Your Location</h1>
          {lat && long && <MyMapComponent
            lat={lat}
            long={long}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />}
          <br />
        </div>
      </div>
    );
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      success => {
        var crd = success.coords;
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);

        localStorage.setItem('latitude', crd.latitude);
        localStorage.setItem('longitude', crd.longitude);
        
        this.setState({
          lat: crd.latitude,
          long: crd.longitude
        })
      },
      err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    );
  }
}
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.long }}>
      {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.long }} />}
    </GoogleMap>
  ))
);

export default Alert;
import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

export  class MapContainter extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    seletedPlace: []
  };

  onMarkerClick = (props, marker, e) => {
    this.state({
      seletedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const makeStyles = {
      width: "100%",
      height: "100%"
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={makeStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />

        <Marker
         onClick={this.onMarkerClick}
         name={'Demoing this feature'}
         
         />

         <InfoWindow
         marker={this.state.activeMarker}
         visible={this.state.showingInfoWindow}
         onClose={this.onClose}>

          <div>{this.state.seletedPlace.name}</div>
           </InfoWindow>
      </div>
    );
  }
}

export default  GoogleApiWrapper((props) => ({
  apiKey: "AIzaSyBEb-pRMQ8YGxsxYqboN5UILK2BNw4hfww"
}))(MapContainter);

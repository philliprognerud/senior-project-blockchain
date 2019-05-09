import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const heatMapData = {
  positions: [
    {lat: 37.499602, lng: -121.838263},
    {lat: 37.259602, lng: -121.838263},
    {lat: 37.266703, lng: -121.830126},
    {lat: 37.264602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.284059, lng: -121.8328},
    {lat: 37.288285, lng: -121.894986},
    {lat: 37.275137, lng: -121.882634},
    {lat: 37.327335, lng: -121.897045},
    {lat: 37.272137, lng: -121.882634},
    {lat: 37.268508, lng: -121.932876},
    {lat: 37.249257, lng: -121.9194},
    {lat: 37.328154, lng: -121.853197},
    {lat: 37.243257, lng: -121.9194},
    {lat: 37.162992, lng: -121.90312},
    {lat: 37.269668, lng: -121.890895},
    {lat: 37.261602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.306160, lng: -121.885601},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.165960, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.285007, lng: -121.903285},
    {lat: 37.305807, lng: -121.872797},
    {lat: 37.274137, lng: -121.882634},
    {lat: 37.405807, lng: -121.872797},
    {lat: 37.274137, lng: -121.882634},
    {lat: 37.334556, lng: -121.892302},
    {lat: 37.343257, lng: -121.899194},
    {lat: 37.266508, lng: -121.932876},
    {lat: 37.243257, lng: -121.9194},
    {lat: 37.266992, lng: -121.90312},
    {lat: 37.262668, lng: -121.890895},
  ],
  options: {
    radius: 20,
    opacity: 0.6,
}}


class FullScreenMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.3,
      lng: -121.8
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          ref={(el) => this._googleMap = el}
          bootstrapURLKeys={{ key: 'AIzaSyBIhqsS3Na4OrZ5aby-f-yR7rg5JswUG60' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default FullScreenMap;

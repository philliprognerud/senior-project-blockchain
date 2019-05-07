import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const heatMapData = {
  positions: [
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.269602, lng: -121.838263},
    {lat: 37.282059, lng: -121.8328},
    {lat: 37.305807, lng: -121.872797},
    {lat: 37.274137, lng: -121.882634},
    {lat: 37.305807, lng: -121.872797},
    {lat: 37.274137, lng: -121.882634},
    {lat: 37.266508, lng: -121.932876},
    {lat: 37.243257, lng: -121.9194},
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

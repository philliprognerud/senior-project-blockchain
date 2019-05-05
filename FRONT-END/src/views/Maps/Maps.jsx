import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const heatMapData = {
  positions: [
    {lat: 37.3, lng: -121.8},
    {lat: 37.3, lng: -121.8},
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
      // Important! Always set the container height explicitly
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

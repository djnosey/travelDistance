import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};

const {REACT_APP_API_KEY} = process.env

export class MapComponent extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 41.4134,
            lng: 2.0182
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_API_KEY
})(MapComponent);
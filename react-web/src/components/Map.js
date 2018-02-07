import React, { Component } from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import geoFindMe from './Location'

class Map extends Component {
  render() {
    const markers = this.props.markers || []

    return (
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
      >
        {markers.map((marker, index) => (
          <Marker {...marker} />
        )
      )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)


//https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAOxDrKboEqRrdmFT-0JbkEF7VT2kUkwFg

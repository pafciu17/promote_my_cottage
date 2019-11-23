import React, { useRef } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { connect } from 'react-redux'
import styled from 'styled-components';
import "proj4leaflet";
import { setMapLocation } from "../../actions";
import {boundsToArray, latLngToArray} from "../../utils";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

const Map = ({ coordinates, zoom, onMapLocationUpdate }) => {
  const position = [65, 26]; // move it somewhere else
  const mapRef = useRef();

  return <MapContainer>
    <LeafletMap
      center={position}
      zoom={zoom}
      onZoomend={(event) => {
        onMapLocationUpdate({
          coordinates,
          zoom: event.target.getZoom(),
          bounds: boundsToArray(mapRef.current.leafletElement.getBounds())
        });
      }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        draggable={true}
        onDragend={(event) => {
          onMapLocationUpdate({
            coordinates: latLngToArray(event.target.getLatLng()),
            zoom,
            bounds: boundsToArray(mapRef.current.leafletElement.getBounds())
          });
        }}
        position={coordinates}
       >
        <Popup minWidth={90}>
          Test
        </Popup>
      </Marker>
    </LeafletMap>
  </MapContainer>
};

export default connect(
  (state) => ({...state.mapLocation}),
  (dispatch) => ({
    onMapLocationUpdate: (mapData) => dispatch(setMapLocation(mapData))
  })
)(Map);

import React, { useState } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import "proj4leaflet";
import mmlLayers from 'leaflet-mml-layers'

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`

const Map = () => {
  const position = [65, 26];
  const [markerPosition, setMarkerPosition] = useState(position);

  return <MapContainer>
    <LeafletMap
      center={position}
      zoom={5}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        draggable={true}
        onDragend={(event) => {
          const markerPosition = event.target.getLatLng();
          setMarkerPosition([markerPosition.lat, markerPosition.lng]);
        }}
        position={markerPosition}
       >
        <Popup minWidth={90}>
          Test
        </Popup>
      </Marker>
    </LeafletMap>
  </MapContainer>
};

export default Map;

import React, { useRef } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import styled from 'styled-components';
import "proj4leaflet";
import {boundsToArray, latLngToArray} from "../../utils";
import L from 'leaflet';

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

const WaterQualityInfo = ({ data }) => {
  console.log('WaterQualityInfo');
  if (!data && data.length === 0) {
    return null;
  }
  const popups = data.map(({ id, coordinates, name, description }) => {
    return <Popup
      key={id}
      position={coordinates}
      closeOnClick={false}
      autoClose={false}
      autoPan={false}
    ><b>{name}</b>, <br />{description}
    </Popup>
  });
  return popups;
}

const CottageMap = ({ defaultPosition, coordinates, zoom, onMapLocationUpdate, waterQuality }) => {
  const position = defaultPosition || [62.93017084006814, 27.2635052383311]; // move it somewhere else
  const mapRef = useRef();

  return <MapContainer>
    <LeafletMap
      center={position}
      zoom={zoom}
      onZoomend={(event) => {
        onMapLocationUpdate({
          center: latLngToArray(mapRef.current.leafletElement.getCenter()),
          coordinates,
          zoom: mapRef.current.leafletElement.getZoom(),
          bounds: boundsToArray(mapRef.current.leafletElement.getBounds())
        });
      }}
      onMoveend={() => {
        onMapLocationUpdate({
          center: latLngToArray(mapRef.current.leafletElement.getCenter()),
          coordinates,
          zoom: mapRef.current.leafletElement.getZoom(),
          bounds: boundsToArray(mapRef.current.leafletElement.getBounds())
        });
      }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[60, 30]}></Marker>
      <Marker
        icon={new L.icon({
          iconUrl: '/cottage.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32]
        })}
        draggable={true}
        onDragend={(event) => {
          onMapLocationUpdate({
            center: latLngToArray(mapRef.current.leafletElement.getCenter()),
            coordinates: latLngToArray(event.target.getLatLng()),
            zoom: mapRef.current.leafletElement.getZoom(),
            bounds: boundsToArray(mapRef.current.leafletElement.getBounds())
          });
        }}
        position={coordinates}
      >
      </Marker>
      <WaterQualityInfo data={waterQuality || []} />
    </LeafletMap>
  </MapContainer>
};

export default CottageMap;
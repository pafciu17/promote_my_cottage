import React, { useRef } from 'react';
import { connect } from 'react-redux'
import "proj4leaflet";
import { setMapLocation } from "../../actions";
import CottageMap from './CottageMap'

export default connect(
  (state) => ({...state.mapLocation, waterQuality: (state.mapData || []).waterQuality}),
  (dispatch) => ({
    onMapLocationUpdate: (mapData) => dispatch(setMapLocation(mapData))
  })
)(CottageMap);

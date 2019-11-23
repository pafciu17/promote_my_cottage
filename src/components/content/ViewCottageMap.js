import React, { useRef } from 'react';
import { connect } from 'react-redux'
import CottageMap from './CottageMap'

export default connect(
  (state) => {
    return ({...state.viewMapData, defaultPosition: state.viewMapData.center });
  },
  (dispatch) => ({
    onMapLocationUpdate: () => {}
  })
)(CottageMap);

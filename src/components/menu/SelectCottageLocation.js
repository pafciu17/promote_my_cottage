import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {confirmMapLocation} from "../../actions";

const SelectMapLocationWrapper = styled.div`
  width: 100%;
  Button {
    margin-left: 20px;
  }
`;

const SelectCottageLocation = ({ onAcceptCottageLocation }) =>
  <SelectMapLocationWrapper>
    <span>Drag marker click to your cottage location and click continue</span>
    <Button variant="contained" color="primary" onClick={onAcceptCottageLocation}>Continue</Button>
  </SelectMapLocationWrapper>;

export default connect(
  (state) => ({ mapLocation: state.mapLocation, mapId: state.mapData.mapId}),
  (dispatch) => ({ dispatch }),
  ({ mapLocation, mapId }, { dispatch }) => {
    return {
      onAcceptCottageLocation: () => {
        // some more handling ?
        dispatch(confirmMapLocation(mapLocation, mapId));
        // history.push('/map2');
      }
    };
  }
)(SelectCottageLocation);

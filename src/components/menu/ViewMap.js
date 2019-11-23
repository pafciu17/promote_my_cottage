import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from "react-router";
import styled from 'styled-components';
import { fetchMap } from '../../actions';

const Wrapper = styled.div`
  width: 100%;
`;

const ViewMap = ({ onLoad, match }) => {
  useEffect(() =>  onLoad(match.params.mapId),[]);
  return <Wrapper>
    <span>Browse the map!</span>
  </Wrapper>;
};

export default compose(
  withRouter,
  connect(
    null,
    (dispatch) => ({
      onLoad: (mapId) => {
        dispatch(fetchMap(mapId));
      }
    })
  )
)(ViewMap);


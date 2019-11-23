import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../history'
import styled from 'styled-components';
import "proj4leaflet";
import SelectCottageLocationMap from "./SelectCottageLocationMap";

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    width: 100%;
    height: 100%;
  }
`;

const Content = () =>
  <ContentWrapper>
    <Router history={history}>
      <Switch>
        <Route path="/map2"><div>No map</div></Route>
        <Route path="/"><SelectCottageLocationMap /></Route>
      </Switch>
    </Router>
  </ContentWrapper>;

export default Content;

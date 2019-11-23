import React from 'react';
import styled from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../../history';
import SelectCottageLocation from "./SelectCottageLocation";

const MenuWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
  height: 35px;
`;

const Menu = () =>
  <MenuWrapper>
    <Router history={history}>
      <Switch>
        <Route path="/map2">Edit map</Route>
        <Route path="/"><SelectCottageLocation /></Route>
      </Switch>
    </Router>
  </MenuWrapper>;

export default Menu;

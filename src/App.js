import React from 'react';
import './App.css';
import Map from './components/content/Map';
import Menu from "./components/menu/Menu";
import styled from 'styled-components';
import { LinearProgress } from '@material-ui/core';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers';
import {LoadingIndicator} from "./components/helpers";
const store = createStore(appReducers);

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MenuWrapper = styled.div`
  flex: 0;
`;

const MapWrapper = styled.div`
  flex: 1;
`;

const App = () =>
  <div className="App">
    <MainWrapper>
      <MenuWrapper>
        <Menu />
        <LoadingIndicator/>
      </MenuWrapper>
      <MapWrapper>
        <Map />
      </MapWrapper>
    </MainWrapper>
  </div>;

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;

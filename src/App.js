import React from 'react';
import './App.css';
import Menu from "./components/menu/Menu";
import styled from 'styled-components';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers';
import {LoadingIndicator} from "./components/helpers";
import Content from "./components/content/Content";
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
        <Content />
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

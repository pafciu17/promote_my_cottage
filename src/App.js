import React from 'react';
import './App.css';
import Map from './components/Map';
import ControlBar from "./components/ControlBar";
import styled from 'styled-components';
import 'typeface-roboto';

const MainWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ControlBarWrapper = styled.div`
  flex: 0;
`;

const MapWrapper = styled.div`
  flex: 1;
`;

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <ControlBarWrapper>
          <ControlBar />
        </ControlBarWrapper>
        <MapWrapper>
          <Map />
        </MapWrapper>
      </MainWrapper>
    </div>
  );
}

export default App;

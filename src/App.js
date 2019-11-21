import React from 'react';
import './App.css';
import styled from 'styled-components';

const MyDiv = styled.a`
  color: red;
  font-size: 40px;
`

function App() {
  return (
    <div className="App">
      <MyDiv>Some test</MyDiv>
    </div>
  );
}

export default App;

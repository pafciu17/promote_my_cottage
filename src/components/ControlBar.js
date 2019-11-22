import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ControlBarWrapper = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
  Button {
    margin-left: 20px;
  }
`;

const ControlBar = () =>
  <ControlBarWrapper>
    <span>Drag marker click to your cottage location and click continue</span>
    <Button variant="contained" color="primary">Continue</Button>
  </ControlBarWrapper>

export default ControlBar;

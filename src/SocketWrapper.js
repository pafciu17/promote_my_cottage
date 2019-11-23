import React from 'react';
import socketHandler from './socketHandler';
import { connect } from 'react-redux'

const SocketWrapper = ({ dispatch }) => {
  socketHandler.on('connect', function () {
    console.log('All good, server is connected!!!!');
    socketHandler.emit('my other event', { my: 'data' });
  });

  return <span></span>; // just empty component
};

export default connect(
  null,
  (dispatch) => ({ dispatch })
)(SocketWrapper)

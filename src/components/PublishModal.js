import React from 'react';
import { compose } from 'redux';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withRouter } from "react-router";
import queryString from 'query-string';
import {connect} from "react-redux";

const getLink = (mapId) => {
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}:${port}/view/${mapId}`;
}

const PublishModal = ({ isModalOpen, location }) => {
  let { mid } = queryString.parse(location.search);
  const mapLink = getLink(mid);
  return (
    <Dialog
      open={isModalOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          The maps is published and available at <a href={mapLink}>{mapLink}</a>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default compose(
  withRouter,
  connect(
    (state) => ({ ...state.publishMap })
  )
)(PublishModal);

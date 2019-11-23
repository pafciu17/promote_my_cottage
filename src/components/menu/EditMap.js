import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {connect} from "react-redux";
import {publishMap} from "../../actions";
import PublishModal from "../PublishModal";

const Wrapper = styled.div`
  width: 100%;
  Button {
    margin-left: 20px;
  }
`;

const EditMap = ({ onPublishMap }) =>
  <Wrapper>
    <span>Our AI created smart default for you, now you can edit it to adjust it to your needs!</span>
    <Button variant="contained" color="primary" onClick={onPublishMap}>Publish</Button>
    <PublishModal />
  </Wrapper>;

export default connect(
  (state) => ({ mapId: state.mapData.mapId}),
  (dispatch) => ({ dispatch }),
  ({ mapLocation, mapId }, { dispatch }) => ({
    onPublishMap: () => {
      console.log('onPublishMap!!!');
      dispatch(publishMap(mapId));
    }
  }))(EditMap);

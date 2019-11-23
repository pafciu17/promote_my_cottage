import {LinearProgress} from "@material-ui/core";
import React from "react";
import { connect } from 'react-redux'

const _LoadingIndicator = ({ isLoading }) =>
  <LinearProgress value={100} variant={isLoading ? 'indeterminate' : 'determinate'} />;

export const LoadingIndicator = connect(
  (state) => ({
    isLoading: state.isLoading
  })
)(_LoadingIndicator);

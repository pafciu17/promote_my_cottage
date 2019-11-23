import { combineReducers } from 'redux'
import {SET_MAP_LOCATION} from "../actions/";
import {SET_LOADING_STATUS} from "../actions";

const initialState = {
  coordinates: [63.140359406342, 29.830284118652347],
  zoom: 6
}

function mapLocation(state = initialState, { type, mapLocation }) {
  switch(type) {
    case SET_MAP_LOCATION:
      return { ...mapLocation }
  }
  return state;
}

const initialStateLoadingState = false;

const isLoading = (state = initialStateLoadingState, {type, isLoading}) => {
  switch(type) {
    case SET_LOADING_STATUS:
      return isLoading;
  }
  return state;
}

const appReducers = combineReducers({
  mapLocation,
  isLoading
});

export default appReducers
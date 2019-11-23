import { combineReducers } from 'redux'
import {SET_MAP_LOCATION, SET_NEW_MAP_DATA, PUBLISH_MAP, SET_LOADING_STATUS, VIEW_MAP_UPDATE} from "../actions/";

const initialState = {
  coordinates: [62.94017084006814, 27.2635052383311],
  zoom: 10
}

function mapLocation(state = initialState, { type, mapLocation }) {
  switch (type) {
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

const initiaMapData = {};

const mapData = (state = initiaMapData, { type, mapData }) => {
  switch (type) {
    case SET_NEW_MAP_DATA:
      return { ...mapData }
  }
  return state
}

const initialPublishMap = { isModalOpen: false };

const publishMap = (state = initialPublishMap, { type }) => {
  switch (type) {
    case PUBLISH_MAP:
      return {
        ...state,
        isModalOpen: true
      }
  };
  return state;
};

const initialViewMapData = {};

const viewMapData = (state = initialViewMapData, { type, mapData }) => {
  switch (type) {
    case VIEW_MAP_UPDATE:
      return {
        ...mapData
      }
  }
  return state;
};

const appReducers = combineReducers({
  mapLocation,
  mapData,
  isLoading,
  publishMap,
  viewMapData
});

export default appReducers
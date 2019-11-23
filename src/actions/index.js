import socketHandler from "../socketHandler";
import history from '../history'

export const SET_MAP_LOCATION = 'SET_MAP_LOCATION';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_NEW_MAP_DATA = 'SET_NEW_MAP_DATA';
export const PUBLISH_MAP = 'PUBLISH_MAP';
export const FETCH_MAP = 'FETCH_MAP';
export const VIEW_MAP_UPDATE = 'VIEW_MAP_UPDATE';

export const setMapLocation = (mapLocation) => ({type: SET_MAP_LOCATION, mapLocation});

export const confirmMapLocation = (mapLocation, mapId) => (dispatch) => {
  socketHandler.emit('fetch_map_suggestions', {
    ...mapLocation,
    mapId
  });
  dispatch(setLoadingStatus(true));
  socketHandler.once('fetch_map_suggestions_done', ({ mapData }) => {
    history.push(`edit?mid=${mapData.mapId}`);
    dispatch(setNewMapData(mapData));
    dispatch(setLoadingStatus(false));
  })
};

export const setNewMapData = (mapData) => {
  return {
    type: SET_NEW_MAP_DATA,
    mapData
  };
}

export const setLoadingStatus = (isLoading) => ({
  type: SET_LOADING_STATUS,
  isLoading
});

export const publishMap = (mapId) => {
  socketHandler.emit('publish_map', { mapId });
  return {
    type: PUBLISH_MAP
  }
};

export const viewMapUpdate = (mapData) => ({
  type: VIEW_MAP_UPDATE,
  mapData
});

export const fetchMap = (mapId) => (dispatch) => {
  socketHandler.emit('fetch_map', { mapId });

  dispatch(setLoadingStatus(true));
  socketHandler.once('map_update', (mapData) => {
    dispatch(viewMapUpdate(mapData));
    dispatch(setLoadingStatus(false));
  });
};
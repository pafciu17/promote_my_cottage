import socketHandler from "../socketHandler";

export const SET_MAP_LOCATION = 'SET_MAP_LOCATION';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

export const setMapLocation = (mapLocation) => ({type: SET_MAP_LOCATION, mapLocation});

export const confirmMapLocation = (mapLocation) => (dispatch) => {
  socketHandler.emit('fetch_map_suggestions', mapLocation);
  dispatch(setLoadingStatus(true));
  socketHandler.once('fetch_map_suggestions_done', (data) => {
    dispatch(setLoadingStatus(false));
  })
};

export const setLoadingStatus = (isLoading) => ({
  type: SET_LOADING_STATUS,
  isLoading
});
export const SET_MAP_LOCATION = 'SET_MAP_LOCATION';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

export const setMapLocation = (mapLocation) => ({type: SET_MAP_LOCATION, mapLocation});

export const confirmMapLocation = (mapLocation) => {
  console.log(mapLocation.coordinates);
  console.log(mapLocation.zoom);
  return {
    type: 'something'
  };
};

export const setLoadingStatus = (isLoading) => ({
  type: SET_LOADING_STATUS,
  isLoading
});
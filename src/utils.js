export const latLngToArray = (coords) => [coords.lat, coords.lng];
export const boundsToArray = (bounds) => [bounds.getNorthWest(), bounds.getSouthEast()].map(latLngToArray);
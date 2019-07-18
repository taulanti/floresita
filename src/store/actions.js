import axios from 'axios';

export const SEARCH_FLOWER = 'SEARCH_FLOWER';
export const FAVORITE_FLOWERS = 'FAVORITE_FLOWERS';
export const GET_FLOWERS = 'GET_FLOWERS';
export const API_ERROR = 'API_ERROR';

export function search(inputText) {
  return { type: SEARCH_FLOWER, inputText };
}

export function favorite(id) {
  return { type: FAVORITE_FLOWERS, id };
}

export function flowers(flowerList) {
  return { type: GET_FLOWERS, flowerList: flowerList };
}

export function apiError(error) {
  return { type: API_ERROR, error: error };
}

export const getFlowers = () => {
  return dispatch => {
    let url = 'http://flowrspot-api.herokuapp.com/api/v1/flowers';

    axios.get(url)
      .then(response => {
        console.log(response.data.flowers);
        dispatch(flowers(response.data.flowers));
      })
      .catch(err => {
        dispatch(apiError(err.response.data.error));
      });
  };
};
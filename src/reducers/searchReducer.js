import { SEARCH_FLOWER, FAVORITE_FLOWERS, API_ERROR, GET_FLOWERS } from '../store/actions';
const initialState = {
  flowerList: [],
  inputText: '',
  filtered: [],
  favorites: []
};

const searchReducer = (state = initialState, action) => {
  if (action.type === SEARCH_FLOWER) {
    const { inputText } = action;
    const filtered = state.flowerList.filter((flower) => flower.name.includes(inputText));
    return {
      ...state, inputText, filtered
    };
  }
  else if (action.type === FAVORITE_FLOWERS) {
    const index = state.flowerList.findIndex((element) => {
      return element.id === action.id;
    })
    console.log('index: '+index);
    if (index !== -1) {
      const favorite = state.flowerList[index].favorite;
      state.flowerList[index].favorite = !favorite;
    }

    return {
      ...state,
    };
  }
  else if (action.type === GET_FLOWERS) {
    return { ...state, flowerList: action.flowerList }
  }
  else {
    return {
      flowerList: state.flowerList,
      inputText: '',
      favorites: []
    }
  }
};

export default searchReducer;
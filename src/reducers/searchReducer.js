import { SEARCH_FLOWER, FAVORITE_FLOWERS } from '../store/actions';
const importAll = (r) => {
  return r.keys().map(r);
}
const getImages = () => {
  const result = importAll(require.context('../assets/images/flowers', false, /\.(png|jpe?g|svg)$/));
  const array = [
    { id: 1, name: 'Flower1', image: '../../../assets/images/flower1.png', favorite: false },
    { id: 2, name: 'Flower2', image: '../../../assets/images/flower2.png', favorite: false },
    { id: 3, name: 'Flower3', image: '../../../assets/images/flower3.png', favorite: false },
    { id: 4, name: 'Flower4', image: '../../../assets/images/flower4.png', favorite: false },
    { id: 5, name: 'Flower5', image: '../../../assets/images/flower5.png', favorite: false },
    { id: 6, name: 'Flower6', image: '../../../assets/images/flower6.png', favorite: false },
    { id: 7, name: 'Flower7', image: '../../../assets/images/flower7.png', favorite: false },
    { id: 8, name: 'Flower8', image: '../../../assets/images/flower8.png', favorite: false },
  ];

  for (let i = 0; i < result.length; i++) {
    array[i].image = result[i];
  }

  return [...array];
}

const initialState = {
  flowerList: getImages(),
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
  if (action.type === FAVORITE_FLOWERS) {
    const favorite = state.flowerList.find((flower) => {
      return flower.id === action.id;
    });
    const index = state.favorites.findIndex((element) => {
      return element.id === favorite.id;
    })
    const favorites = state.favorites;
    if (index === -1) {
      
      console.log('favorites inside reducer');
      console.log(favorites);
      favorites.push(favorite);
    }

    return {
      ...state,
      favorites
    };
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
import { SEARCH_FLOWER } from '../store/actions';
const importAll = (r) => {
  return r.keys().map(r);
}
const getImages = () => {
  const result = importAll(require.context('../assets/images/flowers', false, /\.(png|jpe?g|svg)$/));
  const array = [
    { id: 1, name: 'Flower1', image: '../../../assets/images/flower1.png' },
    { id: 2, name: 'Flower2', image: '../../../assets/images/flower2.png' },
    { id: 3, name: 'Flower3', image: '../../../assets/images/flower3.png' },
    { id: 4, name: 'Flower4', image: '../../../assets/images/flower4.png' },
    { id: 5, name: 'Flower5', image: '../../../assets/images/flower5.png' },
    { id: 6, name: 'Flower6', image: '../../../assets/images/flower6.png' },
    { id: 7, name: 'Flower7', image: '../../../assets/images/flower7.png' },
    { id: 8, name: 'Flower8', image: '../../../assets/images/flower8.png' },
  ];

  for (let i = 0; i < result.length; i++) {
    array[i].image = result[i];
  }

  return [...array];
}

const initialState = {
  flowerList: getImages(),
  inputText: '',
  filtered: []
};

const searchReducer = (state = initialState, action) => {
  if (action.type === SEARCH_FLOWER) {
    const { inputText } = action;
    const filtered = state.flowerList.filter((flower) => flower.name.includes(inputText));
    return {
      ...state, inputText, filtered
    };
  }
  else {
    return {
      flowerList: state.flowerList,
      inputText: ''
    }
  }
};

export default searchReducer;
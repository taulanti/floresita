import searchReducer from '../reducers/searchReducer';
import authReducer from '../reducers/authReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  search: searchReducer,
  auth: authReducer
});

export default rootReducer;

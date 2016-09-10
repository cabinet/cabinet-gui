import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tagList from 'reducers/tags';

const rootReducer = combineReducers({
  tagList,
  routing,
});

export default rootReducer;

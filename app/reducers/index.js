import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import itemDetails from './itemDetails';

const rootReducer = combineReducers({
  counter,
  itemDetails,
  routing,
});

export default rootReducer;

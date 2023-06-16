import {combineReducers} from 'redux';
import userReducer from '../redux/user/Reducer';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;

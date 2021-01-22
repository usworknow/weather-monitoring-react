import { combineReducers } from "redux";
import user from './user';
import forecast from './forecast';

export default combineReducers({user, forecast});

import { combineReducers} from "redux";
import usersReducer from './usersReducer';
import authReducer from './authRuducer';

export default combineReducers({
  users: usersReducer,
  auth: authReducer
});


import { combineReducers} from "redux";
import usersReducer from './usersReducer';
import authReducer from './authRuducer';
import adminsReducer from "./adminsReducer";

export default combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
});


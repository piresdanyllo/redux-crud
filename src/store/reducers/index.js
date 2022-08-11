import { combineReducers } from "redux";
import AuthReducer from './AuthReducer'
import PeopleReducer from "./PeopleReducer";
import AddressReducer from "./AddressReducer";

export default combineReducers({
    AuthReducer,
    PeopleReducer,
    AddressReducer
})
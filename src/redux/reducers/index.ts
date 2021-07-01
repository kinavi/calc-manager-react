import { combineReducers } from 'redux';
import {FormsReducer} from "./forms";

export default combineReducers({
    forms: FormsReducer
});

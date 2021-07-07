
// The purpose of this file is to take all the ducks and combine them along with any middleware it has and add that to the store 

import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";
// combine all the ducks 
const reducer = combineReducers({
	counter: counterReducer
})
const store = createStore(reducer);
export default store;

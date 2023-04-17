import { combineReducers } from "redux";
import { userData } from "./userData";
import { getUData } from "./getData";


export const rootReducer = combineReducers({
	userData,
	getUData
})
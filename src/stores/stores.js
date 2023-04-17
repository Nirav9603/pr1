import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from "../reducer"
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage, 
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer,applyMiddleware(thunk));
const persistedStore = persistStore(store)
  
export default store;
export { persistedStore };
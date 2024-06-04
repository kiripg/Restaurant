import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Sagas from "../Saga/sagas";
import EntrantesReducer from './menu/entrantes.store'

const sagaMiddleware = createSagaMiddleware();

const Reducer = combineReducers({
    entrantes: EntrantesReducer,

})

const Store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });
  
  sagaMiddleware.run(Sagas);
  
  export default Store;
import {
   
    authReducer,
   
  } from '../reducers/auth';
  import {createStore, applyMiddleware, combineReducers} from 'redux';
  import thunk from "redux-thunk";

  import {createLogger} from 'redux-logger';
  
 const reducers= combineReducers({
   auth:authReducer
});
  
  export const logger = createLogger({});
  export const store = createStore(
    reducers,
    applyMiddleware(thunk, logger/*  */)
    
  );
  
 
  
  export default {
    store,
   
  };
  
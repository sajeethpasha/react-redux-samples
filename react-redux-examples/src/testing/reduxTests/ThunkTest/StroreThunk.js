import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import MainReducer from "./reducers/MainReducer";
import thunk from 'redux-thunk';

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("action", action);
    // action.payload.count=5;
    next(action);
};

const middleware = applyMiddleware(loggerMiddleware,thunk);

export const  StoreThunk = createStore(MainReducer, composeWithDevTools(middleware));

StoreThunk.subscribe(()=>{

    console.log("updated state"+ JSON.stringify( StoreThunk.getState()) ) ;
})
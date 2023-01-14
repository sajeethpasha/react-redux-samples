// import React from "react";
// import { ReactDOM } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const initStatePayload={
    type: "INCREMENT" ,
    payload: {
        age:4,
        name:"sajeeth",
        count: 1
    }           
}
const reducer = (state = 0, action) => {
    console.log("reducer is:"+JSON.stringify(action))
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload.count;
        case "DECREMENT":
            return state - action.payload.count;
        default:
            return state;
    }
};

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("action", action);
    action.payload.count=5;
    next(action);
};

const middleware = applyMiddleware(loggerMiddleware);


export const  MiddlewareSampleStore = createStore(reducer, composeWithDevTools(middleware));

MiddlewareSampleStore.subscribe(() => {
    console.log("current state", MiddlewareSampleStore.getState());
});

// MiddlewareSampleStore.dispatch({
//     type: "INCREMENT",
//     payload: 1
// });

// MiddlewareSampleStore.dispatch({
//     type: "INCREMENT",
//     payload: 5
// });

// MiddlewareSampleStore.dispatch({
//     type: "DECREMENT",
//     payload: 2
// });




